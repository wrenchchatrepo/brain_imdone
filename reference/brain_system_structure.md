# Brain System Structure

This document outlines the complete structure and organization of the brain system, including file organization, card formats, metadata standards, and workflows.

## File Organization

### Root Structure
```
/Users/dionedge/dev/brain/
├── .imdone/               # imdone configuration and scripts
│   ├── config.yml         # Main configuration file
│   ├── properties/        # Custom properties for cards and board
│   ├── scripts/           # Automation scripts
│   └── templates/         # Card templates
├── backlog/               # Task cards awaiting processing
├── journal/               # Daily notes and project-specific content
│   ├── brain/             # Brain system documentation
│   ├── dev/               # Development-related notes
│   ├── home/              # Personal and home tasks
│   ├── in_the_black/      # Financial notes and tasks
│   ├── portfolio/         # Portfolio projects
│   └── projects/          # Active project notes
└── reference/             # Reference materials and documentation
```

### Card Organization
Cards are organized by project folders and follow a consistent naming convention:
```
# project_folder
## card_name.md
```

## Card Format

### Standard Card Structure
```markdown
# Card Title

<!-- LIST: Card Title
created::2025-03-02T00:00:00Z
priority::normal
due::
owner::@dionedge
estimate::
-->

Description:
- Purpose: Card purpose
- Scope: Card scope

Tasks:
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

Notes:
- Note 1
- Note 2

Related:
- related_file_1.md
- related_file_2.md

#tag1 #tag2 #tag3
```

### Task Hierarchy
```
### Task
#### Subtask
+ [ ] Subtask
```

## Metadata System

### Core Metadata Fields
```
project::        # Project the card belongs to
sourceFile::     # Source file reference
id::             # Unique identifier
card::           # Card name/title
description::    # Brief description
dependency::     # Dependencies on other cards
priority::       # Priority level (urgent, high, normal, low)
kudos::          # Whether card earns kudos on completion
assignee::       # Person assigned to the card
size::           # Effort size (S, M, L, XL)
repeat::         # Recurrence pattern
estimate::       # Time estimate
created::        # Creation timestamp
start::          # Start timestamp
due::            # Due date
status::         # Current status
tags::           # Categorization tags
```

### Priority Levels
```
☢️ #urgent 
⚠️ #high 
☑️ #normal 
🐌 #low
```

### Status Workflow
```
BACKLOG   → PLANNING → TODO → DOING → DONE
                               ↓
                            REVIEW
                               ↓
                            CODIFY
                               ↓
                          TECH_DEBT
```

## Status Colors
```
BACKLOG:  #A5A5A5 (pastel_gray)
PLANNING: #74C3D1 (pastel_cyan)
NOTE:     #FFE599 (pastel_yellow)
TODO:     #A4C2F4 (pastel_blue)
DOING:    #A1D9A0 (pastel_green)
DONE:     #B5A0E3 (pastel_purple)
REVIEW:   #F4A6C0 (pastel_pink)
CODIFY:   #F6B786 (pastel_orange)
TECH_DEBT: #E69999 (pastel_red)
```

## Common Tags
```
#books      # Book-related content
#BLOCKED    # Tasks blocked by dependencies
#bug        # Bug fixes
#build      # Build-related tasks
#C.R.E.A.M  # Financial tasks
#clean      # Cleanup tasks
#CX         # Customer experience
#delete     # Items to be deleted
#docs       # Documentation tasks
#dupe       # Duplicate items
#enhancement # Enhancements to existing features
#feature    # New features
#focus      # High-focus tasks
#kudos      # Tasks that earn kudos
#MVP        # Minimum viable product tasks
#new        # New items
#refactor   # Code refactoring
#techdebt   # Technical debt
#test       # Testing-related tasks
```

## Emoji System
The brain system uses emojis as visual indicators for different types of content:

### Task and Status Emojis
```
⏱️ - Time tracking
☑️ - Completed task
💥 - Important task
🧨 - Subtask
🛑 - Blocked
⏸️ - Paused
```

### Metadata Emojis
```
📂 - Project
🗄️ - Source file
🔑 - ID
♠️ - Card
📝 - Description
🔗 - Dependency
🐕‍🦺 - Priority
🍪 - Kudos
👶🏽 - Assignee
⏱️ - Time estimate
⏰ - Timestamps
🏷️ - Tags
```

### Technology Emojis
```
↕️ - Repository
🐍 - Python
⚙️ - API
🧠 - LLM
🤖 - Tokens
💰 - Cost
```

## Workflows

### Card Creation Workflow
1. Identify appropriate project folder
2. Create new markdown file with descriptive name
3. Use card template from `.imdone/templates/card_template.md`
4. Fill in required metadata
5. Add to appropriate list (BACKLOG, TODO, etc.)
6. Add relevant tags

### Task Management Workflow
1. Move cards from BACKLOG to PLANNING for initial assessment
2. Move to TODO when ready to work on
3. Move to DOING when actively working
4. Move to REVIEW when complete but needs verification
5. Move to DONE when fully complete
6. Use CODIFY for items that need to be formalized
7. Use TECH_DEBT for technical debt items

### Review Workflow
1. Daily review of DOING items
2. Weekly review of TODO items
3. Monthly review of BACKLOG items
4. Quarterly review of DONE items for patterns and improvements

## Integration with imdone

### Custom Views
```
Current Tasks: list:TODO list:DOING
High Priority: priority:high
Due Soon: due:<7d
My Tasks: owner:@dionedge
Organization Tasks: #organization
```

### Automation
The brain system includes several automation scripts:
- Daily journal creation
- Due date reminders
- Status updates based on activity
- Recurring task creation
- Kudos system for completed tasks

## Templates
Standard templates are available in `.imdone/templates/` for:
- Task cards
- Project cards
- Note cards
- Reference materials
- Project dashboards

## Additional Resources
- brain_cheatsheet.md - Quick reference for brain system usage
- imdone_usage_guide.md - Detailed guide for using imdone with the brain system
- automation_scripts.md - Documentation for automation scripts
- future_enhancements.md - Planned improvements to the brain system 