// Kudos System Script
// This script tracks and awards kudos points for completed tasks

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const JOURNAL_PATH = path.join(process.cwd(), 'journal');
const KUDOS_LOG_PATH = path.join(process.cwd(), '.imdone/kudos_log.json');
const KUDOS_SUMMARY_PATH = path.join(process.cwd(), '.imdone/kudos_summary.json');

// Default kudos values based on task size
const DEFAULT_KUDOS = {
  XS: 1,
  S: 2,
  M: 5,
  L: 10,
  XL: 20
};

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

// Function to load the kudos log
function loadKudosLog() {
  try {
    if (fs.existsSync(KUDOS_LOG_PATH)) {
      const content = fs.readFileSync(KUDOS_LOG_PATH, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error loading kudos log:', error);
  }
  
  return { entries: [] };
}

// Function to save the kudos log
function saveKudosLog(log) {
  try {
    fs.writeFileSync(KUDOS_LOG_PATH, JSON.stringify(log, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving kudos log:', error);
  }
}

// Function to load the kudos summary
function loadKudosSummary() {
  try {
    if (fs.existsSync(KUDOS_SUMMARY_PATH)) {
      const content = fs.readFileSync(KUDOS_SUMMARY_PATH, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error loading kudos summary:', error);
  }
  
  return { users: {}, projects: {} };
}

// Function to save the kudos summary
function saveKudosSummary(summary) {
  try {
    fs.writeFileSync(KUDOS_SUMMARY_PATH, JSON.stringify(summary, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving kudos summary:', error);
  }
}

// Function to calculate kudos points for a task
function calculateKudos(metadata) {
  // If kudos are explicitly set, use that value
  if (metadata.kudos && !isNaN(parseInt(metadata.kudos, 10))) {
    return parseInt(metadata.kudos, 10);
  }
  
  // Otherwise, calculate based on size
  if (metadata.size) {
    const size = metadata.size.toUpperCase();
    if (DEFAULT_KUDOS[size]) {
      return DEFAULT_KUDOS[size];
    }
  }
  
  // Default value if no size or kudos specified
  return DEFAULT_KUDOS.M;
}

// Function to process a file and award kudos if it's a newly completed task
function processKudos(filePath, kudosLog) {
  const content = fs.readFileSync(filePath, 'utf8');
  const metadata = extractMetadata(content);
  
  // Check if this is a completed task that hasn't been awarded kudos yet
  if (metadata && metadata.status === 'DONE' && !metadata.kudosAwarded) {
    console.log(`Processing kudos for: ${metadata.card || path.basename(filePath)}`);
    
    const kudosPoints = calculateKudos(metadata);
    const assignee = metadata.assignee || 'unassigned';
    const project = metadata.project || 'general';
    const completedDate = new Date().toISOString();
    
    // Create a log entry
    const logEntry = {
      id: metadata.id || path.basename(filePath, '.md'),
      card: metadata.card || path.basename(filePath, '.md'),
      assignee: assignee,
      project: project,
      kudos: kudosPoints,
      completedDate: completedDate
    };
    
    // Add to the log
    kudosLog.entries.push(logEntry);
    
    // Update the card to mark kudos as awarded
    const updatedContent = updateMetadata(content, { kudosAwarded: 'true' });
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    
    return logEntry;
  }
  
  return null;
}

// Function to update the kudos summary
function updateKudosSummary(kudosLog) {
  const summary = loadKudosSummary();
  
  // Reset the summary
  summary.users = {};
  summary.projects = {};
  
  // Process all entries in the log
  kudosLog.entries.forEach(entry => {
    // Update user kudos
    if (!summary.users[entry.assignee]) {
      summary.users[entry.assignee] = {
        total: 0,
        byProject: {}
      };
    }
    
    summary.users[entry.assignee].total += entry.kudos;
    
    if (!summary.users[entry.assignee].byProject[entry.project]) {
      summary.users[entry.assignee].byProject[entry.project] = 0;
    }
    
    summary.users[entry.assignee].byProject[entry.project] += entry.kudos;
    
    // Update project kudos
    if (!summary.projects[entry.project]) {
      summary.projects[entry.project] = {
        total: 0,
        byUser: {}
      };
    }
    
    summary.projects[entry.project].total += entry.kudos;
    
    if (!summary.projects[entry.project].byUser[entry.assignee]) {
      summary.projects[entry.project].byUser[entry.assignee] = 0;
    }
    
    summary.projects[entry.project].byUser[entry.assignee] += entry.kudos;
  });
  
  // Add timestamp
  summary.lastUpdated = new Date().toISOString();
  
  // Save the updated summary
  saveKudosSummary(summary);
  
  return summary;
}

// Function to generate a kudos report
function generateKudosReport(summary) {
  console.log('\n===== KUDOS SUMMARY =====');
  
  // User summary
  console.log('\nUser Kudos:');
  Object.keys(summary.users).sort((a, b) => summary.users[b].total - summary.users[a].total).forEach(user => {
    console.log(`${user}: ${summary.users[user].total} kudos`);
    
    // Top projects for this user
    const projects = Object.keys(summary.users[user].byProject)
      .sort((a, b) => summary.users[user].byProject[b] - summary.users[user].byProject[a])
      .slice(0, 3);
    
    if (projects.length > 0) {
      console.log('  Top projects:');
      projects.forEach(project => {
        console.log(`  - ${project}: ${summary.users[user].byProject[project]} kudos`);
      });
    }
  });
  
  // Project summary
  console.log('\nProject Kudos:');
  Object.keys(summary.projects).sort((a, b) => summary.projects[b].total - summary.projects[a].total).forEach(project => {
    console.log(`${project}: ${summary.projects[project].total} kudos`);
    
    // Top contributors for this project
    const users = Object.keys(summary.projects[project].byUser)
      .sort((a, b) => summary.projects[project].byUser[b] - summary.projects[project].byUser[a])
      .slice(0, 3);
    
    if (users.length > 0) {
      console.log('  Top contributors:');
      users.forEach(user => {
        console.log(`  - ${user}: ${summary.projects[project].byUser[user]} kudos`);
      });
    }
  });
  
  console.log('\n=========================');
}

// Main function to process all files
function processAllKudos() {
  const files = findMarkdownFiles();
  const kudosLog = loadKudosLog();
  const awardedKudos = [];
  
  files.forEach(file => {
    const result = processKudos(file, kudosLog);
    if (result) awardedKudos.push(result);
  });
  
  // Save the updated log
  saveKudosLog(kudosLog);
  
  // Update the summary
  const summary = updateKudosSummary(kudosLog);
  
  // Generate a report if kudos were awarded
  if (awardedKudos.length > 0) {
    console.log('\n===== KUDOS AWARDED =====');
    awardedKudos.forEach(kudos => {
      console.log(`${kudos.card} (${kudos.project}): ${kudos.kudos} kudos to ${kudos.assignee}`);
    });
    console.log('========================\n');
    
    // Generate a full report
    generateKudosReport(summary);
  } else {
    console.log('No new kudos awarded.');
  }
  
  return {
    awardedKudos,
    summary
  };
}

// Execute the process
const result = processAllKudos();

// Export for potential use in other scripts
module.exports = {
  processAllKudos,
  result
}; 