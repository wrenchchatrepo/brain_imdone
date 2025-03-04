# Brain System Quick Start Guide

This guide provides a quick introduction to the brain system, helping you get started with task management and knowledge organization.

## What is the Brain System?

The brain system is a comprehensive knowledge management and task tracking system using a card-based Kanban approach. It helps you organize your thoughts, tasks, projects, and reference materials in a structured way.

## Getting Started

### 1. Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd brain
   ```

2. **Install Dependencies**:
   ```bash
   cd .imdone
   npm install
   ```

3. **Open in Cursor**:
   Open the repository in Cursor IDE for the best experience.

### 2. Basic Concepts

- **Cards**: The fundamental unit of information in the brain system. Each card represents a task, note, or project.
- **Lists**: Cards are organized into lists based on their status (BACKLOG, PLANNING, TODO, DOING, REVIEW, DONE).
- **Metadata**: Information about cards, such as due dates, priorities, and assignees, stored in a structured format.
- **Journal**: The main directory where your cards are stored, organized by project.
- **Reference**: Directory for documentation and reference materials.

### 3. Creating Your First Card

1. **Create a Task Card**:
   - Navigate to the journal directory
   - Create a new file with a `.md` extension (e.g., `my_first_task.md`)
   - Use the following template:

   ```markdown
   # My First Task
   
   <!--
   id:: abc12
   card:: My First Task
   description:: This is my first task in the brain system
   project:: getting_started
   priority:: normal
   assignee:: @your_name
   created:: 2023-06-15T10:00:00Z
   status:: TODO
   tags:: #first #example
   -->
   
   ## Requirements
   - Complete the quick start guide
   - Create my first task
   - Update the task status
   
   ## Notes
   This is where I can add notes about the task.
   ```

2. **Update the Card ID**:
   - Open `journal/card_ids.csv`
   - Find an unused ID and mark it as used
   - Update your card with this ID

### 4. Working with Cards

1. **Viewing Cards**:
   - Open the imdone board to see all your cards organized by status
   - Use filters to focus on specific projects or tags

2. **Updating Card Status**:
   - Edit the `status::` metadata in the card
   - Move the card to a different list on the board

3. **Adding Metadata**:
   - Edit the card's metadata section (between `<!--` and `-->`)
   - Add or update metadata using the `key:: value` format

### 5. Common Workflows

1. **Starting a New Task**:
   - Create a new task card in the TODO status
   - Set a start date and due date
   - Assign the task to yourself or someone else

2. **Completing a Task**:
   - Move the task to DOING when you start working on it
   - Update the task with progress notes
   - Move the task to REVIEW when ready for review
   - Finally, move the task to DONE when completed

3. **Weekly Review**:
   - Review all your active tasks
   - Update statuses and priorities
   - Plan for the upcoming week

### 6. Automation Features

The brain system includes several automation scripts that help manage your tasks:

1. **Due Date Reminders**:
   - Automatically notifies you of upcoming due dates

2. **Card Movement**:
   - Automatically moves cards between statuses based on dates

3. **Recurring Tasks**:
   - Creates new instances of recurring tasks

4. **Kudos System**:
   - Tracks and awards points for completed tasks

5. **Archiving**:
   - Automatically archives completed cards after a specified period

To run these automations:
```bash
cd .imdone
npm run start
```

### 7. Getting Help

- Refer to `reference/brain_cheatsheet.md` for detailed examples and tips
- Check `reference/naming_conventions.md` for naming guidelines
- Explore `reference/project_views.md` for custom view configurations

## Next Steps

1. **Explore the Reference Directory**:
   Take some time to read through the reference materials to understand the system better.

2. **Set Up Your Projects**:
   Create project directories in the journal folder for your work.

3. **Customize Your Workflow**:
   Adjust the system to fit your specific needs and preferences.

4. **Schedule Regular Reviews**:
   Set aside time each week to review and update your tasks.

## Conclusion

The brain system is designed to be flexible and powerful. Start with the basics and gradually incorporate more advanced features as you become comfortable with the system. Remember, the goal is to help you organize your work and thoughts more effectively, so adapt it to work best for you. 