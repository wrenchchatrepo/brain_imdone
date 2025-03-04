# Brain Automation Scripts

This document provides documentation for the automation scripts used in the brain system. These scripts automate various aspects of task management, including due date reminders, card movement, recurring tasks, and kudos tracking.

## Overview

The brain automation system consists of several JavaScript scripts that run on Node.js. These scripts can be run individually or as a group using the main runner script. The scripts are located in the `.imdone/scripts` directory.

## Installation

To use the automation scripts, you need to have Node.js installed on your system. Once Node.js is installed, you can install the required dependencies by running:

```bash
cd .imdone
npm install
```

This will install the necessary dependencies specified in the `package.json` file.

## Available Scripts

### Due Date Reminder

**File**: `due_date_reminder.js`

**Purpose**: Checks for tasks with upcoming due dates and generates notifications.

**Features**:
- Configurable warning period (default: 3 days)
- Ignores completed tasks
- Sorts tasks by due date (closest first)
- Provides detailed output with project, card name, and days remaining

**Usage**:
```bash
cd /path/to/brain
node .imdone/scripts/due_date_reminder.js
```

**Output Example**:
```
===== UPCOMING DUE DATES =====
[semantic_ml] api_integration - Due in 2 days (2023-06-15)
[brain_imdone] documentation - Due in 3 days (2023-06-16)
==============================
```

### Automatic Card Movement

**File**: `auto_card_movement.js`

**Purpose**: Moves cards between statuses based on certain conditions.

**Features**:
- Moves cards from TODO to DOING when start date is today or in the past
- Moves cards from REVIEW to DONE when reviewed date is set
- Updates the status metadata in the card files
- Provides a summary of moved cards

**Usage**:
```bash
cd /path/to/brain
node .imdone/scripts/auto_card_movement.js
```

**Output Example**:
```
Moving card api_integration from TODO to DOING

===== CARDS MOVED =====
api_integration: TODO -> DOING
=======================
```

### Recurring Tasks

**File**: `recurring_tasks.js`

**Purpose**: Creates new instances of recurring tasks based on recurrence patterns.

**Features**:
- Supports various recurrence patterns (daily, weekly, monthly, yearly, custom)
- Automatically assigns new card IDs from card_ids.csv
- Updates due dates and start dates based on recurrence pattern
- Creates new task files in the appropriate project directories
- Provides a summary of new tasks created

**Usage**:
```bash
cd /path/to/brain
node .imdone/scripts/recurring_tasks.js
```

**Output Example**:
```
Processing recurring task: weekly_review

===== NEW RECURRING TASKS CREATED =====
weekly_review (ID: abc12)
  Start: 6/15/2023
  Due: 6/18/2023
=======================================
```

### Kudos System

**File**: `kudos_system.js`

**Purpose**: Tracks and awards kudos points for completed tasks.

**Features**:
- Calculates kudos based on task size (XS=1, S=2, M=5, L=10, XL=20)
- Supports explicit kudos values in metadata
- Maintains a log of awarded kudos in `.imdone/kudos_log.json`
- Generates summary reports by user and project
- Marks tasks as having received kudos to avoid duplicate awards

**Usage**:
```bash
cd /path/to/brain
node .imdone/scripts/kudos_system.js
```

**Output Example**:
```
Processing kudos for: api_integration

===== KUDOS AWARDED =====
api_integration (semantic_ml): 10 kudos to @username
========================

===== KUDOS SUMMARY =====
User Kudos:
@username: 45 kudos
  Top projects:
  - semantic_ml: 25 kudos
  - brain_imdone: 15 kudos
  - general: 5 kudos

Project Kudos:
semantic_ml: 30 kudos
  Top contributors:
  - @username: 25 kudos
  - @otheruser: 5 kudos
=========================
```

### Archive Completed Cards

**File**: `archive_completed_cards.js`

**Purpose**: Archives cards that have been in the DONE status for a specified period.

**Features**:
- Configurable archiving threshold (default: 30 days)
- Moves completed cards to an archive directory
- Maintains the original directory structure in the archive
- Updates card metadata to include archive date and status
- Provides a summary of archived cards

**Usage**:
```bash
cd /path/to/brain
node .imdone/scripts/archive_completed_cards.js
```

**Output Example**:
```
Archiving card: weekly_report

===== CARDS ARCHIVED =====
weekly_report (project_x)
  From: /path/to/brain/journal/project_x/weekly_report_abc12.md
  To: /path/to/brain/archive/project_x/weekly_report_abc12.md
=========================
```

### Automation Runner

**File**: `run_automations.js`

**Purpose**: Runs all automation scripts in sequence.

**Features**:
- Automatically discovers and runs all JavaScript scripts in the scripts directory
- Logs output to console and log files
- Provides a summary of script execution results
- Creates timestamped log files in `.imdone/logs` directory

**Usage**:
```bash
cd /path/to/brain
node .imdone/scripts/run_automations.js
```

**Output Example**:
```
Starting brain automation scripts
Found 4 automation scripts to run
Running due_date_reminder.js...
Output from due_date_reminder.js:
...
Running auto_card_movement.js...
Output from auto_card_movement.js:
...
Running recurring_tasks.js...
Output from recurring_tasks.js:
...
Running kudos_system.js...
Output from kudos_system.js:
...

Automation Summary:
due_date_reminder.js: SUCCESS
auto_card_movement.js: SUCCESS
recurring_tasks.js: SUCCESS
kudos_system.js: SUCCESS
Automation run completed
```

## Shell Script

**File**: `run_automations.sh`

**Purpose**: Provides a shell script wrapper for running the automation scripts.

**Features**:
- Can be scheduled with cron or other schedulers
- Logs output to console and log files
- Handles errors gracefully
- Provides a summary of execution results

**Usage**:
```bash
cd /path/to/brain
.imdone/scripts/run_automations.sh
```

## Scheduling Automations

To run the automations on a schedule, you can use cron (on Linux/Mac) or Task Scheduler (on Windows).

### Cron Example (Linux/Mac)

To run the automations daily at 9:00 AM:

```bash
# Edit crontab
crontab -e

# Add the following line
0 9 * * * /path/to/brain/.imdone/scripts/run_automations.sh
```

### Task Scheduler Example (Windows)

1. Open Task Scheduler
2. Create a new task
3. Set the trigger to run daily at 9:00 AM
4. Set the action to run the script:
   - Program: `node`
   - Arguments: `C:\path\to\brain\.imdone\scripts\run_automations.js`
   - Start in: `C:\path\to\brain`

### Automatic Cron Setup (Linux/Mac)

For convenience, a script is provided to automatically set up the cron job:

```bash
cd /path/to/brain
.imdone/scripts/setup_cron.sh
```

This script will:
1. Make the run_automations.sh script executable
2. Check if a cron job already exists
3. Add a new cron job to run the automation scripts daily at 9:00 AM
4. Provide confirmation and instructions for viewing/modifying the cron job

## Customization

You can customize the behavior of the automation scripts by modifying the configuration variables at the top of each script file. For example:

- In `due_date_reminder.js`, you can change `DAYS_WARNING` to adjust the warning period.
- In `kudos_system.js`, you can modify `DEFAULT_KUDOS` to change the kudos values for different task sizes.

## Troubleshooting

If you encounter issues with the automation scripts:

1. Check the log files in `.imdone/logs` for error messages.
2. Ensure Node.js is installed and the dependencies are installed correctly.
3. Verify that the script has the correct permissions to read and write files.
4. Check that the file paths in the scripts match your repository structure.

## Extending the System

To add a new automation script:

1. Create a new JavaScript file in the `.imdone/scripts` directory.
2. Implement the desired functionality.
3. Export any functions or data that might be useful to other scripts.
4. The script will automatically be included in the next run of `run_automations.js`.

## Conclusion

The brain automation scripts provide powerful tools for managing tasks, tracking progress, and maintaining the brain system. By automating routine tasks, they help you focus on the important work while ensuring that nothing falls through the cracks. 