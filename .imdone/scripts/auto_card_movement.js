// Automatic Card Movement Script
// This script moves cards between statuses based on certain conditions

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const JOURNAL_PATH = path.join(process.cwd(), 'journal');
const STATUS_ORDER = ['BACKLOG', 'PLANNING', 'TODO', 'DOING', 'REVIEW', 'DONE'];

// Function to extract metadata from a card
function extractMetadata(content) {
  const metadataRegex = /<!--([\s\S]*?)-->/g;
  const matches = content.match(metadataRegex);
  
  if (!matches || matches.length === 0) return null;
  
  const metadata = {};
  const metadataContent = matches[0].replace('<!--', '').replace('-->', '').trim();
  
  metadataContent.split('\n').forEach(line => {
    const parts = line.split('::');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join('::').trim();
      metadata[key] = value;
    }
  });
  
  return metadata;
}

// Function to update metadata in a card
function updateMetadata(content, updates) {
  const metadataRegex = /<!--([\s\S]*?)-->/g;
  const matches = content.match(metadataRegex);
  
  if (!matches || matches.length === 0) return content;
  
  let metadataContent = matches[0].replace('<!--', '').replace('-->', '').trim();
  const lines = metadataContent.split('\n');
  
  // Update each line that matches a key in updates
  const updatedLines = lines.map(line => {
    const parts = line.split('::');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      if (updates[key] !== undefined) {
        return `${key}:: ${updates[key]}`;
      }
    }
    return line;
  });
  
  const updatedMetadata = `<!--\n${updatedLines.join('\n')}\n-->`;
  return content.replace(matches[0], updatedMetadata);
}

// Function to find all markdown files in the journal directory
function findMarkdownFiles() {
  return glob.sync(path.join(JOURNAL_PATH, '**/*.md'));
}

// Function to check if a card should be moved to a new status
function shouldMoveCard(metadata) {
  if (!metadata || !metadata.status) return null;
  
  const currentStatus = metadata.status;
  
  // Rules for automatic movement
  
  // 1. Move from TODO to DOING when start date is today or in the past
  if (currentStatus === 'TODO' && metadata.start) {
    const startDate = new Date(metadata.start);
    const now = new Date();
    if (startDate <= now) {
      return 'DOING';
    }
  }
  
  // 2. Move from DOING to REVIEW when all checkboxes are checked
  // This would require parsing the content for checkboxes, which is more complex
  
  // 3. Move from REVIEW to DONE when reviewed date is set
  if (currentStatus === 'REVIEW' && metadata.reviewed) {
    return 'DONE';
  }
  
  return null;
}

// Function to process a file and move it if needed
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const metadata = extractMetadata(content);
  
  const newStatus = shouldMoveCard(metadata);
  if (newStatus) {
    console.log(`Moving card ${metadata.card || path.basename(filePath)} from ${metadata.status} to ${newStatus}`);
    
    // Update the status in the metadata
    const updatedContent = updateMetadata(content, { status: newStatus });
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    
    return {
      filePath: filePath,
      cardName: metadata.card || path.basename(filePath, '.md'),
      oldStatus: metadata.status,
      newStatus: newStatus
    };
  }
  
  return null;
}

// Main function to process all files
function processAllCards() {
  const files = findMarkdownFiles();
  const movedCards = [];
  
  files.forEach(file => {
    const result = processFile(file);
    if (result) movedCards.push(result);
  });
  
  // Generate summary output
  if (movedCards.length > 0) {
    console.log('\n===== CARDS MOVED =====');
    movedCards.forEach(card => {
      console.log(`${card.cardName}: ${card.oldStatus} -> ${card.newStatus}`);
    });
    console.log('=======================\n');
  } else {
    console.log('No cards needed to be moved.');
  }
  
  // Return the moved cards for potential further processing
  return movedCards;
}

// Execute the process
const movedCards = processAllCards();

// Export for potential use in other scripts
module.exports = {
  processAllCards,
  movedCards
}; 