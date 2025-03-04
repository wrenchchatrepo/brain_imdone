# Naming Conventions

This document defines the standard naming conventions for files and folders in the brain system.

## Directory Naming

### Project Directories
- Use lowercase with underscores for spaces
- Keep names short but descriptive
- Examples: `semantic_ml`, `brain_imdone`, `large_semantic_model`

### Category Directories
- Use lowercase with no spaces
- Examples: `journal`, `reference`, `archive`

## File Naming

### Card Files
- Use snake_case (lowercase with underscores)
- Include a descriptive name that clearly indicates the content
- Examples: `project_setup.md`, `api_integration.md`, `database_schema.md`

### Reference Files
- Use snake_case with descriptive names
- Include the type of reference in the name
- Examples: `brain_cheatsheet.md`, `tools_reference.md`, `api_documentation.md`

### Template Files
- Use snake_case with the type of template as a prefix
- Examples: `task_template.md`, `project_template.md`, `note_template.md`

## Card ID Conventions

- Use the 5-character alphanumeric IDs from card_ids.csv
- Assign IDs sequentially as new cards are created
- Mark IDs as used in the CSV file once assigned

## Metadata Conventions

### Tags
- Use camelCase for multi-word tags
- Start with # symbol
- Examples: `#bug`, `#feature`, `#techDebt`, `#highPriority`

### Metadata Keys
- Use camelCase for multi-word keys
- End with :: separator
- Examples: `project::`, `assignee::`, `dueDate::`

### Status Values
- Use ALL_CAPS for status values
- Examples: `BACKLOG`, `TODO`, `DOING`, `DONE`

### Priority Values
- Use emoji + #tag format
- Examples: `☢️ #urgent`, `⚠️ #high`, `☑️ #normal`, `🐌 #low`

## File Content Structure

### Card Structure
- Start with project folder path
- Follow with card name
- Include task/note content
- End with metadata in HTML comments
- Separate cards with `===`

### Section Headers
- Use Markdown headers (# to ####)
- Use Title Case for headers
- Examples: `## Project Overview`, `### Implementation Details`

## Consistency Guidelines

1. Always follow these conventions for new files and folders
2. When updating existing files, adjust names to match conventions
3. Use the same conventions across all projects
4. Document any exceptions to these conventions with comments

By following these naming conventions, we ensure consistency and improve the organization and discoverability of content in the brain system. 