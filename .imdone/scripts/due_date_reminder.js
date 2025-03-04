// Due Date Reminder Script
// This script checks for tasks with upcoming due dates and generates notifications

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const DAYS_WARNING = 3; // Number of days before due date to start showing warnings
const JOURNAL_PATH = path.join(process.cwd(), 'journal');

// Function to parse date strings
function parseDate(dateStr) {
  if (!dateStr) return null;
  return new Date(dateStr);
}

// Function to check if a date is within the warning period
function isWithinWarningPeriod(dueDate) {
  if (!dueDate) return false;
  
  const now = new Date();
  const warningThreshold = new Date();
  warningThreshold.setDate(now.getDate() + DAYS_WARNING);
  
  return dueDate > now && dueDate <= warningThreshold;
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

// Function to find all markdown files in the journal directory
function findMarkdownFiles() {
  return glob.sync(path.join(JOURNAL_PATH, '**/*.md'));
}

// Function to check a file for upcoming due dates
function checkFileForDueDates(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const metadata = extractMetadata(content);
  
  if (!metadata || !metadata.due || metadata.status === 'DONE') return null;
  
  const dueDate = parseDate(metadata.due);
  
  if (isWithinWarningPeriod(dueDate)) {
    return {
      filePath: filePath,
      cardName: metadata.card || path.basename(filePath, '.md'),
      project: metadata.project || 'Unknown',
      dueDate: dueDate,
      daysRemaining: Math.ceil((dueDate - new Date()) / (1000 * 60 * 60 * 24))
    };
  }
  
  return null;
}

// Main function to check all files and generate notifications
function checkDueDates() {
  const files = findMarkdownFiles();
  const upcomingTasks = [];
  
  files.forEach(file => {
    const result = checkFileForDueDates(file);
    if (result) upcomingTasks.push(result);
  });
  
  // Sort by due date (closest first)
  upcomingTasks.sort((a, b) => a.dueDate - b.dueDate);
  
  // Generate notification output
  if (upcomingTasks.length > 0) {
    console.log('\n===== UPCOMING DUE DATES =====');
    upcomingTasks.forEach(task => {
      console.log(`[${task.project}] ${task.cardName} - Due in ${task.daysRemaining} days (${task.dueDate.toLocaleDateString()})`);
    });
    console.log('==============================\n');
  }
  
  // Return the tasks for potential further processing
  return upcomingTasks;
}

// Execute the check
const upcomingTasks = checkDueDates();

// Export for potential use in other scripts
module.exports = {
  checkDueDates,
  upcomingTasks
}; 