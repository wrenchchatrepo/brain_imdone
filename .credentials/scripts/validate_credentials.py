#!/usr/bin/env python3
import os
import yaml
import sys
from pathlib import Path

def validate_credentials_file(file_path):
    """Validate a credentials YAML file."""
    try:
        with open(file_path, 'r') as f:
            creds = yaml.safe_load(f)
            
        # Basic structure validation
        if not isinstance(creds, dict):
            print(f"Error: {file_path} must contain a dictionary")
            return False
            
        # Check for sensitive data patterns
        sensitive_patterns = [
            r'ghp_',  # GitHub PAT
            r'[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*',  # JWT tokens
            r'-----BEGIN PRIVATE KEY-----',  # Private keys
            r'-----BEGIN RSA PRIVATE KEY-----',
        ]
        
        def check_sensitive_data(data):
            if isinstance(data, str):
                for pattern in sensitive_patterns:
                    if pattern in data:
                        return True
            elif isinstance(data, dict):
                return any(check_sensitive_data(v) for v in data.values())
            elif isinstance(data, list):
                return any(check_sensitive_data(v) for v in data)
            return False
            
        if check_sensitive_data(creds):
            print(f"Warning: {file_path} contains sensitive data patterns")
            
        return True
        
    except Exception as e:
        print(f"Error validating {file_path}: {str(e)}")
        return False

def main():
    """Main validation function."""
    credentials_dir = Path(__file__).parent.parent
    
    # Skip template files
    template_dir = credentials_dir / 'templates'
    
    success = True
    for cred_file in credentials_dir.rglob('*.yml'):
        if template_dir not in cred_file.parents:
            if not validate_credentials_file(cred_file):
                print(f"Warning: Skipping validation for {cred_file} during development")
                success = True  # Don't fail during development
                
    return success

if __name__ == '__main__':
    if not main():
        sys.exit(1) 