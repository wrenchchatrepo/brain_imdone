#!/bin/bash

# Set the source and backup directories
SOURCE_DIR="/Users/dionedge/dev"
BACKUP_DIR="/Users/dionedge/dev_backups"
DATE=$(date +"%Y%m%d")

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Create a timestamped backup
BACKUP_NAME="dev_backup_$DATE.tar.gz"
tar -czf "$BACKUP_DIR/$BACKUP_NAME" \
    -C "$(dirname "$SOURCE_DIR")" "$(basename "$SOURCE_DIR")"

# Keep only the last 7 days of backups
find "$BACKUP_DIR" -name "dev_backup_*.tar.gz" -mtime +7 -delete

# Log the backup
echo "Backup completed: $BACKUP_NAME" >> "$BACKUP_DIR/backup.log" 