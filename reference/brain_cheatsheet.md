### Brain Cheatsheet

**Key Symbol Legend**
- ⌘ = Command
- ⇧ = Shift
- ⌥ = Option (Alt)
- ⌃ = Control
- ↑ = Up Arrow
- ↓ = Down Arrow
- ← = Left Arrow
- → = Right Arrow
- ⌫ = Delete

**Starting New Notes**
- `Ctrl/Cmd + N`: Create new note
- `::new`: Quick note creation marker
- `#new`: New card tag

**Special Syntax**
- `#tag` - Add tags to cards
- `[text](link)` - Add links
- `- [ ]` - Create checkbox
- `- [x]` - Checked checkbox
- `>` - Block quote
- `---` - Horizontal separator

**Imdone Card Formats**
- HTML Comment Format (Recommended):
  ```
  <!-- TODO: Card Title
  created::2023-06-21T10:00:00Z
  -->
  ```
- Hashtag Format:
  ```
  #TODO Card Title
  created::2023-06-21T10:00:00Z
  ```

| Essential | App | VSC |
|--------|---------------|-------------------|
| New Note/Card | `⌘ + N` | `⌘ + N` |
| Save | `⌘ + S` | `⌘ + S` |
| Quick Add Task | `⌘ + T` | `⌘ + T` |
| Search | `⌘ + F` | `⌘ + F` |
| Toggle Board View | `⌘ + B` | N/A |
| Quick Filter | `⌘ + P` | `⌘ + P` |

| Card | App | VSC |
|--------|---------------|-------------------|
| Move Card Left | `⌥ + ←` | N/A |
| Move Card Right | `⌥ + →` | N/A |
| Archive Card | `⌘ + ⌫` | N/A |
| Edit Card | `⌘ + E` | `⌘ + Click` |
| Add Tag | `⌘ + #` | Type `#` |
| Add Due Date | `⌘ + D` | Type `::due` |

| Navigation | App | VSC |
|--------|---------------|-------------------|
| Switch Lists | `⌘ + 1-9` | N/A |
| Collapse/Expand | `⌘ + [` / `⌘ + ]` | Same |
| Go to Board | `⌘ + ⇧ + B` | N/A |
| Go to Source | `⌘ + ⌥ + O` | `⌘ + Click` |
| Previous/Next Card | `⌥ + ↑` / `⌥ + ↓` | N/A |

| Formatting | Both Platforms |
|--------|---------------|
| Bold | `⌘ + B` |
| Italic | `⌘ + I` |
| Strikethrough | `⌘ + ⇧ + S` |
| Code Block | `⌘ + ⇧ + C` |
| Link | `⌘ + K` |

| Status | App | VSC |
|--------|---------------|-------------------|
| Mark TODO | `⌘ + 1` | Type `TODO:` |
| Mark DOING | `⌘ + 2` | Type `DOING:` |
| Mark DONE | `⌘ + 3` | Type `DONE:` |
| Toggle Checkbox | `⌘ + ⇧ + X` | `⌘ + Click` |

| Controls | App | VSC |
|--------|---------------|-------------------|
| Zoom In | `⌘ + +` | `⌘ + +` |
| Zoom Out | `⌘ + -` | `⌘ + -` |
| Reset Zoom | `⌘ + 0` | `⌘ + 0` |
| Toggle Sidebar | `⌘ + ⇧ + S` | `⌘ + B` |
| Focus Board | `⌘ + 1` | N/A |
| Focus Editor | `⌘ + 2` | N/A |
---
### Note:
- ✅ = Full Support
- ❌ = Not Supported
- "Limited" = Basic functionality available
- "Basic" = Core feature present but with fewer options
- "Advanced" = Full feature set with additional options

### Available in Both Platforms
✅ Core Features:
- Basic task creation and management
- Markdown syntax support
- Task status changes (TODO, DOING, DONE)
- Basic tags and metadata
- File-based kanban boards
- Checkbox functionality
- Basic linking

### Standalone App Advantages
🔷 Enhanced Features:
- Full kanban board visualization
- Drag-and-drop interface
- Advanced board customization
- Built-in templates
- Enhanced filtering options
- Better visualization of metadata
- Dedicated workspace views
- Custom board layouts
- Built-in time tracking
- Advanced reporting features

| Core Feature | VSC | App |
|---------|------------------|----------------|
| Basic Task Creation | ✅ | ✅ |
| Markdown Support | ✅ | ✅ |
| TODO/DOING/DONE Status | ✅ | ✅ |
| Basic Tags | ✅ | ✅ |
| File-based Kanban | ✅ | ✅ |
| Checkboxes | ✅ | ✅ |
| Basic Linking | ✅ | ✅ |

| Advanced | VSC | App |
|---------|------------------|----------------|
| Drag-and-Drop | Limited | Full Support |
| Board Visualization | Basic | Advanced |
| Custom Board Layouts | ❌ | ✅ |
| Templates | Basic | Advanced |
| Time Tracking | ❌ | Built-in |
| Reporting | Basic | Advanced |
| Filtering Options | Basic | Advanced |
| Metadata Display | Text Only | Visual Cards |

| UI/UX | VSC | App |
|---------|------------------|----------------|
| Keyboard Shortcuts | VS Code Native | Custom |
| Board Customization | Limited | Full |
| Workspace Views | Single View | Multiple Views |
| Card Preview | Basic | Rich Preview |
| Search Capabilities | VS Code Search | Dedicated Search |
| Theme Support | VS Code Themes | Custom Themes |

| Project | VSC | App |
|---------|------------------|----------------|
| Multi-project Support | ✅ | ✅ |
| Team Collaboration | Basic | Advanced |
| Progress Tracking | Basic | Advanced |
| Priority Management | Text-based | Visual Tools |
| Due Date Management | Text-based | Calendar View |
| Task Dependencies | ❌ | ✅ |

| Integration | VSC | App |
|---------|------------------|----------------|
| Git Integration | VS Code Native | Built-in |
| File Sync | Auto | Auto |
| External Links | ✅ | ✅ |
| API Access | Limited | Full |
| Export Options | Basic | Advanced |
| Import Options | Basic | Advanced |

| Performance | VSC | App |
|---------|------------------|----------------|
| Startup Speed | Fast | Medium |
| Large Project Handling | VS Code Limited | Optimized |
| Memory Usage | Low | Medium |
| Offline Support | ✅ | ✅ |
| Auto-save | VS Code Based | Built-in |
| File Watching | VS Code Based | Native |
---

## Advanced Usage Examples

### Creating a New Task Card

1. Create a new markdown file in the appropriate project directory
2. Use the following format:

```markdown
# /Users/dionedge/dev/brain/journal/projects/
## new_feature.md

### Implement User Authentication

Add user authentication to the application using OAuth 2.0.

#### Requirements
- Support Google and GitHub login
- Store user profiles in the database
- Implement session management

<!--
project:: my_project
id:: abc123
card:: new_feature
description:: Implement OAuth 2.0 authentication
priority:: ⚠️ #high
assignee:: @username
size:: M
estimate:: 3 days
created:: 2023-03-01T10:00:00Z
due:: 2023-03-15T17:00:00Z
status:: TODO
tags:: #feature, #security, #auth
-->
```

### Using Filters for Custom Views

#### Filter by Project and Status
```
project = /semantic_ml/ and status = /TODO|DOING/
```
Shows all TODO and DOING items in the semantic_ml project.

#### Filter by Priority and Due Date
```
priority = /⚠️/ and due < "{{now + 7 days}}"
```
Shows all high-priority items due within the next week.

#### Filter by Assignee and Tags
```
assignee = /@username/ and tags = /#bug|#feature/
```
Shows all bugs and features assigned to a specific user.

### Working with Card IDs

1. Check card_ids.csv for available IDs
2. Choose an unused ID (where used = FALSE)
3. Add the ID to your card metadata: `id:: abcd1`
4. Update card_ids.csv to mark the ID as used

### Creating Project Dashboards

1. Use the project dashboard template from reference/project_dashboard_template.md
2. Fill in the project-specific information
3. Save the file in the project directory
4. Update the dashboard regularly with current project status

### Common Workflows

#### Starting a New Task
1. Move card from BACKLOG to TODO
2. Add yourself as assignee
3. Set priority and estimate
4. Add start date metadata

#### Completing a Task
1. Move card from DOING to DONE
2. Update completion metadata
3. Add any relevant notes about the implementation
4. Enjoy the kudos animation!

#### Weekly Review Process
1. Filter for all cards updated in the last week
2. Review progress and update status
3. Move completed cards to DONE
4. Prioritize upcoming work
5. Update project dashboards

### Keyboard Shortcuts for Efficiency

| Action | Shortcut |
|--------|----------|
| Create new card | Cmd/Ctrl + N |
| Save card | Cmd/Ctrl + S |
| Move card right | Shift + → |
| Move card left | Shift + ← |
| Open card source | Cmd/Ctrl + O |
| Filter cards | Cmd/Ctrl + F |
| Toggle board view | Cmd/Ctrl + B |
| Focus card | Enter |
| Exit focus mode | Esc |

### Metadata Reference

| Metadata | Description | Example |
|----------|-------------|---------|
| project:: | Project identifier | project:: semantic_ml |
| id:: | Unique card ID | id:: abc123 |
| card:: | Card name | card:: feature_implementation |
| description:: | Brief description | description:: Add new feature |
| priority:: | Importance level | priority:: ⚠️ #high |
| assignee:: | Assigned person | assignee:: @username |
| size:: | Effort size (S/M/L/XL) | size:: M |
| estimate:: | Time estimate | estimate:: 3 days |
| created:: | Creation timestamp | created:: 2023-03-01T10:00:00Z |
| start:: | Start timestamp | start:: 2023-03-02T09:00:00Z |
| due:: | Due date timestamp | due:: 2023-03-15T17:00:00Z |
| status:: | Current status | status:: DOING |
| tags:: | Categorization tags | tags:: #feature, #ui |

