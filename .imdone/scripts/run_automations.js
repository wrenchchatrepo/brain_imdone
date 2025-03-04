// Brain Automation Runner
// This script runs all the automation scripts for the brain system
// Includes:
// - due_date_reminder.js: Checks for tasks with upcoming due dates
// - auto_card_movement.js: Moves cards between statuses based on conditions
// - recurring_tasks.js: Creates new instances of recurring tasks
// - kudos_system.js: Tracks and awards kudos points for completed tasks
// - archive_completed_cards.js: Archives cards that have been in DONE status for a specified period

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const SCRIPTS_DIR = path.join(process.cwd(), '.imdone/scripts');
const LOG_DIR = path.join(process.cwd(), '.imdone/logs');
const LOG_FILE = path.join(LOG_DIR, `automation_${new Date().toISOString().replace(/:/g, '-')}.log`);

// Ensure log directory exists
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

// Function to log output
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  
  console.log(message);
  fs.appendFileSync(LOG_FILE, logMessage);
}

// Function to run a script and capture its output
function runScript(scriptPath) {
  const scriptName = path.basename(scriptPath);
  
  log(`Running ${scriptName}...`);
  
  try {
    // Execute the script and capture its output
    const output = execSync(`node "${scriptPath}"`, { encoding: 'utf8' });
    
    // Log the output
    log(`Output from ${scriptName}:\n${output}`);
    
    return true;
  } catch (error) {
    log(`Error running ${scriptName}: ${error.message}`);
    if (error.stdout) log(`stdout: ${error.stdout}`);
    if (error.stderr) log(`stderr: ${error.stderr}`);
    
    return false;
  }
}

// Main function to run all automation scripts
function runAllAutomations() {
  log('Starting brain automation scripts');
  
  // Get all JavaScript files in the scripts directory
  const scriptFiles = fs.readdirSync(SCRIPTS_DIR)
    .filter(file => file.endsWith('.js') && file !== 'run_automations.js')
    .map(file => path.join(SCRIPTS_DIR, file));
  
  log(`Found ${scriptFiles.length} automation scripts to run`);
  
  // Run each script in sequence
  const results = {};
  
  scriptFiles.forEach(scriptPath => {
    const scriptName = path.basename(scriptPath);
    results[scriptName] = runScript(scriptPath);
  });
  
  // Log summary
  log('\nAutomation Summary:');
  Object.keys(results).forEach(script => {
    log(`${script}: ${results[script] ? 'SUCCESS' : 'FAILED'}`);
  });
  
  log('Automation run completed');
  
  return results;
}

// Run all automations
const results = runAllAutomations();

// Export for potential use in other scripts
module.exports = {
  runAllAutomations,
  results
}; 