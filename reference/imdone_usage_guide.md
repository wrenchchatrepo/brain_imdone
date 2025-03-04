# Imdone Usage Guide for Brain System

## Card Formats

Imdone supports two main card formats in our brain system:

### 1. HTML Comment Format (Recommended)

```markdown
# Card Title

<!-- TODO: Card Title
created::2023-06-21T10:00:00Z
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

Notes:
- Note 1

Related:
- Related item

#tags #go #here
```

### 2. Hashtag Format

```markdown
# Card Title

#TODO Card Title
created::2023-06-21T10:00:00Z
priority::normal
due::
owner::@dionedge
estimate::

Description:
- Purpose: Card purpose
- Scope: Card scope

Tasks:
- [ ] Task 1
- [ ] Task 2

Notes:
- Note 1

Related:
- Related item

#tags #go #here
```

## Creating New Cards

1. **Using Templates**:
   - Use the template at `.imdone/templates/card_template.md`
   - Copy the template and fill in the details

2. **Manually**:
   - Create a new markdown file in the appropriate directory
   - Use one of the formats above
   - Save the file with a `.md` extension

## Card Locations

Cards can be placed in the following directories:
- `backlog/`: For items to be processed
- `journal/`: For daily notes and tasks
- `projects/`: For project-specific tasks

## Lists

The following lists are available:
- BACKLOG: Items to be processed
- PLANNING: In planning phase
- NOTE: General notes and documentation
- TODO: Ready to work on
- DOING: Currently in progress
- DONE: Completed tasks
- REVIEW: Needs review
- CODIFY: To be codified
- TECH DEBT: Technical debt to address

## Metadata

Common metadata fields:
- `created`: Creation timestamp
- `priority`: normal, high, low
- `due`: Due date
- `owner`: Person responsible
- `estimate`: Time estimate

## Tips

1. **Moving Cards Between Lists**:
   - Change the list name in the card's HTML comment or hashtag
   - Example: Change `<!-- TODO:` to `<!-- DOING:`

2. **Adding Metadata**:
   - Add metadata in the format `key::value`
   - Example: `priority::high`

3. **Filtering Cards**:
   - Use the filter box in imdone
   - Example: `list:TODO owner:@dionedge`

4. **Keyboard Shortcuts**:
   - `r`: Refresh the board
   - `n`: Create a new card
   - `f`: Focus on filter box

5. **Custom Commands**:
   - The custom command for opening files in Cursor is set to: `cursor "${path}":${line}` 