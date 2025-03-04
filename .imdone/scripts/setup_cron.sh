#!/bin/bash

# Setup Cron Job for Brain Automation
# This script sets up a cron job to run the brain automation scripts daily

# Get the directory of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Navigate to the workspace root (parent of .imdone)
WORKSPACE_ROOT="$( cd "$SCRIPT_DIR/../.." && pwd )"

# Path to the automation runner script
AUTOMATION_SCRIPT="$WORKSPACE_ROOT/.imdone/scripts/run_automations.sh"

# Make sure the automation script is executable
chmod +x "$AUTOMATION_SCRIPT"

# Create a temporary file for the crontab
TEMP_CRONTAB=$(mktemp)

# Export the current crontab
crontab -l > "$TEMP_CRONTAB" 2>/dev/null || echo "# Brain System Crontab" > "$TEMP_CRONTAB"

# Check if the cron job already exists
if grep -q "run_automations.sh" "$TEMP_CRONTAB"; then
    echo "Cron job for brain automation already exists."
    echo "Current crontab:"
    cat "$TEMP_CRONTAB"
    rm "$TEMP_CRONTAB"
    exit 0
fi

# Add the cron job to run daily at 9:00 AM
echo "# Run brain automation daily at 9:00 AM" >> "$TEMP_CRONTAB"
echo "0 9 * * * $AUTOMATION_SCRIPT" >> "$TEMP_CRONTAB"

# Install the new crontab
crontab "$TEMP_CRONTAB"

# Clean up
rm "$TEMP_CRONTAB"

echo "Cron job set up successfully!"
echo "The brain automation scripts will run daily at 9:00 AM."
echo "To view or modify the cron job, use 'crontab -e'." 