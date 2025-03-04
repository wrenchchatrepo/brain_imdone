# Project Views

This document defines standard views for different projects and contexts in the brain system.

## View Types

### Project-Specific Views
Views that focus on a single project, showing all cards related to that project.

### Context-Based Views
Views that show cards related to a specific context (e.g., development, planning, review) across all projects.

### Priority-Based Views
Views that show cards based on their priority level, regardless of project.

### Status-Based Views
Views that show cards with a specific status across all projects.

## Standard Project Views

### brain_imdone Project View
```
project = /brain_imdone/
```
Shows all cards related to the brain_imdone project.

### semantic_ml Project View
```
project = /semantic_ml/
```
Shows all cards related to the semantic_ml project.

### large_semantic_model Project View
```
project = /large_semantic_model/
```
Shows all cards related to the large_semantic_model project.

## Context-Based Views

### Development View
```
tags = /#dev|#development|#coding|#implementation/
```
Shows all cards related to development work across all projects.

### Planning View
```
tags = /#planning|#design|#architecture/
```
Shows all cards related to planning and design work across all projects.

### Documentation View
```
tags = /#docs|#documentation/
```
Shows all cards related to documentation work across all projects.

### Research View
```
tags = /#research|#investigation|#exploration/
```
Shows all cards related to research and investigation work across all projects.

## Priority-Based Views

### Urgent Items View
```
tags = /#urgent/ or priority = /☢️/
```
Shows all urgent items across all projects.

### High Priority View
```
tags = /#high/ or priority = /⚠️/
```
Shows all high-priority items across all projects.

### Normal Priority View
```
tags = /#normal/ or priority = /☑️/
```
Shows all normal-priority items across all projects.

### Low Priority View
```
tags = /#low/ or priority = /🐌/
```
Shows all low-priority items across all projects.

## Status-Based Views

### Backlog View
```
status = /BACKLOG/
```
Shows all backlog items across all projects.

### Todo View
```
status = /TODO/
```
Shows all todo items across all projects.

### In Progress View
```
status = /DOING/
```
Shows all in-progress items across all projects.

### Review View
```
status = /REVIEW/
```
Shows all items that need review across all projects.

### Done View
```
status = /DONE/
```
Shows all completed items across all projects.

## Combined Views

### Current Sprint View
```
tags = /#sprint/ and status != /DONE/
```
Shows all items in the current sprint that are not yet done.

### Blocked Items View
```
tags = /#BLOCKED/
```
Shows all blocked items across all projects.

### Due Soon View
```
due < "{{now + 7 days}}" and status != /DONE/
```
Shows all items due within the next 7 days that are not yet done.

### Recently Updated View
```
updated > "{{now - 3 days}}"
```
Shows all items that have been updated in the last 3 days.

## How to Use Views

1. Open the imdone board
2. Click on the filter icon or press Ctrl+F
3. Enter the filter query for the desired view
4. Save frequently used views for quick access

By using these standard views, you can quickly focus on specific aspects of your work and improve your productivity. 