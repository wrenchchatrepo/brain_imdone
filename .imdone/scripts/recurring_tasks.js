// Recurring Tasks Script
// This script creates new instances of recurring tasks based on recurrence patterns

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const JOURNAL_PATH = path.join(process.cwd(), 'journal');
const TEMPLATES_PATH = path.join(process.cwd(), '.imdone/templates');
const CARD_IDS_PATH = path.join(process.cwd(), 'journal/card_ids.csv');

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

// Function to find all markdown files in the journal directory
function findMarkdownFiles() {
  return glob.sync(path.join(JOURNAL_PATH, '**/*.md'));
}

// Function to get an unused card ID
function getUnusedCardId() {
  // Read the card_ids.csv file
  let cardIdsContent;
  try {
    cardIdsContent = fs.readFileSync(CARD_IDS_PATH, 'utf8');
  } catch (error) {
    console.error('Error reading card IDs file:', error);
    return generateRandomId();
  }
  
  // Parse the CSV content
  const lines = cardIdsContent.split('\n').filter(line => line.trim() !== '');
  const header = lines[0].split(',');
  const idIndex = header.indexOf('id');
  const usedIndex = header.indexOf('used');
  
  if (idIndex === -1 || usedIndex === -1) {
    console.error('Invalid card IDs file format');
    return generateRandomId();
  }
  
  // Find an unused ID
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(',');
    if (parts[usedIndex].trim().toLowerCase() === 'false') {
      // Mark this ID as used
      parts[usedIndex] = 'TRUE';
      lines[i] = parts.join(',');
      
      // Write the updated content back to the file
      fs.writeFileSync(CARD_IDS_PATH, lines.join('\n'), 'utf8');
      
      return parts[idIndex].trim();
    }
  }
  
  // If no unused ID found, generate a random one
  return generateRandomId();
}

// Function to generate a random ID (fallback)
function generateRandomId() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

// Function to calculate the next occurrence date based on recurrence pattern
function calculateNextOccurrence(lastDate, recurrencePattern) {
  const date = new Date(lastDate);
  
  // Parse the recurrence pattern (e.g., "daily", "weekly", "monthly", "yearly", or "every 2 weeks")
  if (recurrencePattern.toLowerCase() === 'daily') {
    date.setDate(date.getDate() + 1);
  } else if (recurrencePattern.toLowerCase() === 'weekly') {
    date.setDate(date.getDate() + 7);
  } else if (recurrencePattern.toLowerCase() === 'monthly') {
    date.setMonth(date.getMonth() + 1);
  } else if (recurrencePattern.toLowerCase() === 'yearly') {
    date.setFullYear(date.getFullYear() + 1);
  } else if (recurrencePattern.toLowerCase().startsWith('every ')) {
    // Parse patterns like "every 2 weeks" or "every 3 days"
    const parts = recurrencePattern.toLowerCase().split(' ');
    if (parts.length === 3) {
      const count = parseInt(parts[1], 10);
      const unit = parts[2];
      
      if (!isNaN(count)) {
        if (unit === 'days' || unit === 'day') {
          date.setDate(date.getDate() + count);
        } else if (unit === 'weeks' || unit === 'week') {
          date.setDate(date.getDate() + (count * 7));
        } else if (unit === 'months' || unit === 'month') {
          date.setMonth(date.getMonth() + count);
        } else if (unit === 'years' || unit === 'year') {
          date.setFullYear(date.getFullYear() + count);
        }
      }
    }
  }
  
  return date;
}

// Function to create a new instance of a recurring task
function createRecurringTaskInstance(originalTask, metadata) {
  // Calculate the next occurrence dates
  const now = new Date();
  let nextDueDate = null;
  let nextStartDate = null;
  
  if (metadata.due && metadata.recurrence) {
    nextDueDate = calculateNextOccurrence(metadata.due, metadata.recurrence);
  }
  
  if (metadata.start && metadata.recurrence) {
    nextStartDate = calculateNextOccurrence(metadata.start, metadata.recurrence);
  }
  
  // Skip if the next occurrence is in the past
  if (nextDueDate && nextDueDate < now) {
    return null;
  }
  
  // Create a new task based on the original
  const newId = getUnusedCardId();
  let newContent = originalTask;
  
  // Update the metadata
  const updates = {
    id: newId,
    created: now.toISOString(),
    status: 'TODO'
  };
  
  if (nextStartDate) {
    updates.start = nextStartDate.toISOString();
  }
  
  if (nextDueDate) {
    updates.due = nextDueDate.toISOString();
  }
  
  // Apply the updates to the content
  const metadataRegex = /<!--([\s\S]*?)-->/g;
  const matches = newContent.match(metadataRegex);
  
  if (matches && matches.length > 0) {
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
    newContent = newContent.replace(matches[0], updatedMetadata);
  }
  
  // Determine the file path for the new task
  const projectFolder = metadata.project ? path.join(JOURNAL_PATH, metadata.project) : JOURNAL_PATH;
  const fileName = `${metadata.card || 'recurring_task'}_${newId}.md`;
  const filePath = path.join(projectFolder, fileName);
  
  // Ensure the project directory exists
  if (!fs.existsSync(projectFolder)) {
    fs.mkdirSync(projectFolder, { recursive: true });
  }
  
  // Write the new task to a file
  fs.writeFileSync(filePath, newContent, 'utf8');
  
  return {
    id: newId,
    filePath: filePath,
    cardName: metadata.card || path.basename(filePath, '.md'),
    dueDate: nextDueDate,
    startDate: nextStartDate
  };
}

// Function to process a file and create a new instance if it's a recurring task
function processRecurringTask(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const metadata = extractMetadata(content);
  
  // Check if this is a recurring task that has been completed
  if (metadata && metadata.recurrence && metadata.status === 'DONE') {
    console.log(`Processing recurring task: ${metadata.card || path.basename(filePath)}`);
    
    return createRecurringTaskInstance(content, metadata);
  }
  
  return null;
}

// Main function to process all files
function processAllRecurringTasks() {
  const files = findMarkdownFiles();
  const newTasks = [];
  
  files.forEach(file => {
    const result = processRecurringTask(file);
    if (result) newTasks.push(result);
  });
  
  // Generate summary output
  if (newTasks.length > 0) {
    console.log('\n===== NEW RECURRING TASKS CREATED =====');
    newTasks.forEach(task => {
      console.log(`${task.cardName} (ID: ${task.id})`);
      if (task.startDate) console.log(`  Start: ${task.startDate.toLocaleDateString()}`);
      if (task.dueDate) console.log(`  Due: ${task.dueDate.toLocaleDateString()}`);
    });
    console.log('=======================================\n');
  } else {
    console.log('No new recurring tasks needed to be created.');
  }
  
  // Return the new tasks for potential further processing
  return newTasks;
}

// Execute the process
const newTasks = processAllRecurringTasks();

// Export for potential use in other scripts
module.exports = {
  processAllRecurringTasks,
  newTasks
}; 