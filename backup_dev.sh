#!/bin/bash

# Configuration
BACKUP_DIR="/Users/dionedge/backups/dev"
SOURCE_DIR="/Users/dionedge/dev"
DATE=$(date +%Y-%m-%d)
BACKUP_NAME="dev_backup_${DATE}"
LOG_FILE="${BACKUP_DIR}/backup.log"

# Create backup directory if it doesn't exist
mkdir -p "${BACKUP_DIR}"

# Function to log messages
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "${LOG_FILE}"
}

# Start backup
log_message "Starting backup of ${SOURCE_DIR}"

# Create a new backup using rsync
rsync -av --delete \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='__pycache__' \
    --exclude='*.pyc' \
    --exclude='.DS_Store' \
    --exclude='.env' \
    --exclude='credentials.json' \
    --exclude='*.log' \
    "${SOURCE_DIR}/" \
    "${BACKUP_DIR}/${BACKUP_NAME}/"

# Check if backup was successful
if [ $? -eq 0 ]; then
    log_message "Backup completed successfully"
    
    # Create a symlink to the latest backup
    rm -f "${BACKUP_DIR}/latest"
    ln -s "${BACKUP_NAME}" "${BACKUP_DIR}/latest"
    
    # Clean up old backups (keep last 7 days)
    find "${BACKUP_DIR}" -maxdepth 1 -type d -name "dev_backup_*" -mtime +7 -exec rm -rf {} \;
else
    log_message "Backup failed!"
    exit 1
fi 