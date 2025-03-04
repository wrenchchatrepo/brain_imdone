// Archive Completed Cards Script
// This script archives cards that have been in the DONE status for a specified period

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const JOURNAL_PATH = path.join(process.cwd(), 'journal');
const ARCHIVE_PATH = path.join(process.cwd(), 'archive');
const DAYS_BEFORE_ARCHIVE = 30; // Number of days a card must be in DONE status before archiving

// Ensure archive directory exists
if (!fs.existsSync(ARCHIVE_PATH)) {
  fs.mkdirSync(ARCHIVE_PATH, { recursive: true });
}

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

// Function to check if a card should be archived
function shouldArchiveCard(metadata) {
  if (!metadata || metadata.status !== 'DONE') return false;
  
  // Check if the card has a completed date
  if (!metadata.completed) return false;
  
  // Parse the completed date
  const completedDate = new Date(metadata.completed);
  if (isNaN(completedDate.getTime())) return false;
  
  // Calculate the age of the completion
  const now = new Date();
  const ageInDays = Math.floor((now - completedDate) / (1000 * 60 * 60 * 24));
  
  // Archive if the card has been completed for longer than the threshold
  return ageInDays >= DAYS_BEFORE_ARCHIVE;
}

// Function to archive a card
function archiveCard(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const metadata = extractMetadata(content);
    
    if (!shouldArchiveCard(metadata)) return null;
    
    console.log(`Archiving card: ${metadata.card || path.basename(filePath)}`);
    
    // Determine the archive path
    const relativePath = path.relative(JOURNAL_PATH, filePath);
    const archiveFilePath = path.join(ARCHIVE_PATH, relativePath);
    
    // Ensure the directory exists
    const archiveDir = path.dirname(archiveFilePath);
    if (!fs.existsSync(archiveDir)) {
      fs.mkdirSync(archiveDir, { recursive: true });
    }
    
    // Update the metadata to include archive information
    const now = new Date();
    const updatedContent = updateMetadata(content, { 
      archived: now.toISOString(),
      status: 'ARCHIVED'
    });
    
    // Write the file to the archive directory
    fs.writeFileSync(archiveFilePath, updatedContent, 'utf8');
    
    // Delete the original file
    fs.unlinkSync(filePath);
    
    return {
      originalPath: filePath,
      archivePath: archiveFilePath,
      cardName: metadata.card || path.basename(filePath, '.md'),
      project: metadata.project || 'Unknown'
    };
  } catch (error) {
    console.error(`Error archiving card ${filePath}:`, error);
    return null;
  }
}

// Main function to process all files
function archiveCompletedCards() {
  const files = findMarkdownFiles();
  const archivedCards = [];
  
  files.forEach(file => {
    const result = archiveCard(file);
    if (result) archivedCards.push(result);
  });
  
  // Generate summary output
  if (archivedCards.length > 0) {
    console.log('\n===== CARDS ARCHIVED =====');
    archivedCards.forEach(card => {
      console.log(`${card.cardName} (${card.project})`);
      console.log(`  From: ${card.originalPath}`);
      console.log(`  To: ${card.archivePath}`);
    });
    console.log('=========================\n');
  } else {
    console.log('No cards needed to be archived.');
  }
  
  return archivedCards;
}

// Execute the process
const archivedCards = archiveCompletedCards();

// Export for potential use in other scripts
module.exports = {
  archiveCompletedCards,
  archivedCards
}; 