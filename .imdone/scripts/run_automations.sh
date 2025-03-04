#!/bin/bash

# Brain Automation Runner Shell Script
# This script runs the brain automation scripts and can be scheduled with cron

# Get the directory of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Navigate to the workspace root (parent of .imdone)
WORKSPACE_ROOT="$( cd "$SCRIPT_DIR/../.." && pwd )"

# Log file
LOG_DIR="$WORKSPACE_ROOT/.imdone/logs"
LOG_FILE="$LOG_DIR/automation_$(date +%Y-%m-%d_%H-%M-%S).log"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Function to log messages
log() {
  echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] $1"
  echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] $1" >> "$LOG_FILE"
}

# Log start
log "Starting brain automation run"
log "Workspace root: $WORKSPACE_ROOT"

# Navigate to the workspace root
cd "$WORKSPACE_ROOT" || {
  log "Error: Could not navigate to workspace root at $WORKSPACE_ROOT"
  exit 1
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  log "Error: Node.js is not installed"
  exit 1
fi

# Run the automation script
log "Running automation scripts..."
node "$SCRIPT_DIR/run_automations.js" 2>&1 | tee -a "$LOG_FILE"

# Check if the script ran successfully
if [ ${PIPESTATUS[0]} -eq 0 ]; then
  log "Automation scripts completed successfully"
else
  log "Error: Automation scripts failed with exit code ${PIPESTATUS[0]}"
fi

# Log completion
log "Automation run completed"

# Exit with the status of the Node.js script
exit ${PIPESTATUS[0]} 