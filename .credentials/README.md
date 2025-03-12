# Credentials Management System

This directory contains a secure credential management system for the brain project. It provides a structured way to store and validate sensitive information like API keys and service account credentials.

## Structure

```
.credentials/
├── README.md
├── scripts/
│   └── validate_credentials.py
├── templates/
│   └── credentials.yml.template
├── brain/
│   └── credentials.yml
└── hbia2/
    └── credentials.yml
```

## Security Features

1. **Git Ignored**: The entire `.credentials` directory is ignored by git
2. **Validation**: Pre-commit hooks validate credential files
3. **Pattern Detection**: Automatically detects sensitive data patterns
4. **Template Based**: Structured format for consistent credential storage

## Usage

### Adding New Credentials

1. Copy the template:
   ```bash
   cp templates/credentials.yml.template {project_name}/credentials.yml
   ```

2. Fill in your credentials following the template structure

3. Validate your changes:
   ```bash
   python3 scripts/validate_credentials.py
   ```

### Accessing Credentials in Code

```python
import yaml
from pathlib import Path

def load_credentials(project):
    cred_path = Path('.credentials') / project / 'credentials.yml'
    with open(cred_path, 'r') as f:
        return yaml.safe_load(f)

# Example usage
brain_creds = load_credentials('brain')
github_token = brain_creds['api_keys']['github']['key']
```

## Security Best Practices

1. **Never commit credentials**
   - The `.credentials` directory is git-ignored
   - Use environment variables in production

2. **Regular Rotation**
   - Rotate API keys and tokens regularly
   - Update expiration dates in credential files

3. **Access Control**
   - Limit access to credential files
   - Use appropriate file permissions

4. **Backup**
   - Keep secure backups of credential files
   - Document credential locations

## Validation

The system includes automatic validation that checks for:
- Proper YAML structure
- Sensitive data patterns
- Required fields
- Format consistency

Run validation manually:
```bash
python3 scripts/validate_credentials.py
```

## Projects

### Brain Project
- GitHub Personal Access Token
- Cursor API Key
- Imdone API Key

### HBIA2 Project
- Google Cloud Service Account
- Gemini API Key

## Troubleshooting

If you encounter validation errors:
1. Check YAML syntax
2. Ensure all required fields are present
3. Verify sensitive data patterns
4. Check file permissions 