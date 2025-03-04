# Example Cards for the Brain System

This document provides example cards for different types of content and workflows in the brain system. Use these as templates or references when creating your own cards.

## 1. Basic Task Card

```markdown
# Implement Login Feature

<!--
id:: abc12
card:: Implement Login Feature
description:: Create a secure login system with email and password authentication
project:: webapp
priority:: high
size:: M
assignee:: @developer
created:: 2023-06-15T10:00:00Z
start:: 2023-06-20T09:00:00Z
due:: 2023-06-25T17:00:00Z
status:: TODO
tags:: #feature #security #frontend
-->

## Requirements
- Create login form with email and password fields
- Implement form validation
- Connect to authentication API
- Add "Remember me" functionality
- Implement error handling for failed logins

## Acceptance Criteria
- [ ] Users can log in with valid credentials
- [ ] Invalid login attempts show appropriate error messages
- [ ] "Remember me" functionality works as expected
- [ ] Password reset link is available
- [ ] Form is accessible and works on mobile devices

## Notes
API endpoint for authentication is available at `/api/auth/login`
```

## 2. Bug Fix Card

```markdown
# Fix Navigation Menu on Mobile

<!--
id:: def34
card:: Fix Navigation Menu on Mobile
description:: The navigation menu doesn't display correctly on mobile devices
project:: webapp
priority:: urgent
size:: S
assignee:: @designer
created:: 2023-06-16T14:30:00Z
start:: 2023-06-16T15:00:00Z
due:: 2023-06-17T17:00:00Z
status:: DOING
tags:: #bug #mobile #ui
-->

## Issue Description
The navigation menu is cut off on mobile devices with screen width less than 375px. Menu items are not visible and the hamburger icon is misaligned.

## Steps to Reproduce
1. Open the website on a mobile device or using device emulation in browser
2. Set viewport width to 375px or less
3. Observe the navigation menu

## Expected Behavior
Navigation menu should be fully visible and functional on all supported mobile devices.

## Actual Behavior
Menu is cut off and hamburger icon is misaligned by approximately 20px.

## Possible Solution
Update the media query breakpoints and adjust the padding/margin in the navigation component.
```

## 3. Research Note Card

```markdown
# Research: GraphQL vs REST APIs

<!--
id:: ghi56
card:: Research: GraphQL vs REST APIs
description:: Comparative analysis of GraphQL and REST for our new API
project:: research
priority:: normal
size:: L
assignee:: @architect
created:: 2023-06-10T09:15:00Z
status:: DONE
completed:: 2023-06-14T16:45:00Z
tags:: #research #api #architecture
-->

## Research Questions
- What are the key differences between GraphQL and REST?
- Which approach is better suited for our specific use case?
- What are the performance implications of each?
- How does the developer experience compare?

## Findings

### GraphQL Advantages
- Clients can request exactly the data they need
- Reduces over-fetching and under-fetching of data
- Single endpoint for all operations
- Strong typing system
- Introspection capabilities

### REST Advantages
- Simpler to implement initially
- Better caching mechanisms
- More familiar to most developers
- Better tooling support
- More mature ecosystem

### Performance Considerations
- GraphQL can be more efficient for complex data requirements
- REST may perform better for simple, well-defined data needs
- GraphQL requires careful optimization to avoid N+1 query problems

## Recommendation
Based on our application's complex data requirements and frequent UI changes, GraphQL would be the better choice despite the steeper learning curve.
```

## 4. Meeting Notes Card

```markdown
# Team Meeting: Q3 Planning

<!--
id:: jkl78
card:: Team Meeting: Q3 Planning
description:: Notes from the quarterly planning meeting
project:: management
priority:: normal
created:: 2023-06-01T13:00:00Z
status:: NOTE
tags:: #meeting #planning #team
-->

## Meeting Details
- **Date**: June 1, 2023
- **Time**: 1:00 PM - 3:30 PM
- **Location**: Conference Room A
- **Attendees**: @manager, @developer, @designer, @architect, @product_owner

## Agenda
1. Review Q2 accomplishments
2. Discuss challenges and lessons learned
3. Set priorities for Q3
4. Assign key responsibilities
5. Establish success metrics

## Key Decisions
- Focus on mobile experience improvements in Q3
- Postpone the reporting feature to Q4
- Hire an additional frontend developer
- Increase test coverage to at least 80%

## Action Items
- @manager: Update the roadmap by June 5
- @developer: Create technical debt tickets by June 7
- @designer: Prepare mobile UI improvement proposals by June 10
- @architect: Evaluate new caching solution by June 15
- @product_owner: Prioritize feature backlog by June 3

## Notes
The team agreed that improving the mobile experience should be our top priority based on user feedback and analytics data showing increasing mobile usage.
```

## 5. Project Card

```markdown
# Mobile App Redesign

<!--
id:: mno90
card:: Mobile App Redesign
description:: Comprehensive redesign of our mobile application
project:: mobile_app
priority:: high
assignee:: @project_lead
created:: 2023-05-15T09:00:00Z
start:: 2023-06-01T09:00:00Z
due:: 2023-08-31T17:00:00Z
status:: PLANNING
tags:: #project #design #mobile
-->

## Project Overview
Complete redesign of our mobile application to improve user experience, modernize the UI, and add new features based on user feedback.

## Objectives
- Improve user satisfaction score from 3.2 to 4.0+
- Increase daily active users by 25%
- Reduce user churn by 15%
- Improve app store rating from 3.8 to 4.5+

## Deliverables
- Updated user interface designs
- Improved navigation system
- New feature: Dark mode
- New feature: Offline mode
- Performance optimizations
- Accessibility improvements

## Timeline
- **Phase 1 (June)**: Research and planning
- **Phase 2 (July)**: Design and prototyping
- **Phase 3 (August)**: Implementation and testing
- **Launch**: September 1, 2023

## Resources
- Design team: 2 UI/UX designers
- Development team: 3 mobile developers
- QA team: 2 testers
- Budget: $75,000

## Dependencies
- User research study completion
- Design system update
- Backend API enhancements

## Risks
- Tight timeline may impact quality
- User resistance to significant changes
- Technical challenges with offline mode implementation
```

## 6. Recurring Task Card

```markdown
# Weekly Team Standup

<!--
id:: pqr12
card:: Weekly Team Standup
description:: Regular team meeting to discuss progress and blockers
project:: management
priority:: normal
assignee:: @team_lead
created:: 2023-06-01T09:00:00Z
start:: 2023-06-05T10:00:00Z
due:: 2023-06-05T10:30:00Z
status:: DONE
completed:: 2023-06-05T10:25:00Z
recurrence:: weekly
tags:: #meeting #recurring #team
-->

## Agenda
1. What did you accomplish last week?
2. What are you working on this week?
3. Are there any blockers or issues?
4. Any announcements or updates?

## Participants
- @team_lead
- @developer1
- @developer2
- @designer
- @qa_engineer

## Meeting Notes
- @developer1 completed the authentication feature
- @developer2 is having issues with the payment gateway integration
- @designer will share new mockups by Wednesday
- @qa_engineer reported a critical bug in the checkout process

## Action Items
- @team_lead to help @developer2 with payment gateway issues
- @developer1 to investigate the checkout bug
- All team members to review the new mockups by Thursday
```

## 7. Personal Task Card

```markdown
# Learn TypeScript

<!--
id:: stu34
card:: Learn TypeScript
description:: Improve TypeScript skills through online courses and practice
project:: personal_development
priority:: normal
size:: XL
assignee:: @me
created:: 2023-06-10T18:00:00Z
start:: 2023-06-15T19:00:00Z
due:: 2023-07-15T23:59:59Z
status:: TODO
tags:: #learning #typescript #personal
-->

## Goals
- Understand TypeScript fundamentals
- Learn advanced type system features
- Practice by converting a JavaScript project to TypeScript
- Build a small project using TypeScript

## Resources
- TypeScript documentation
- Udemy course: "Understanding TypeScript"
- GitHub repository: example-typescript-project
- TypeScript playground

## Progress Tracking
- [ ] Complete TypeScript basics (1 week)
- [ ] Learn interfaces and types (1 week)
- [ ] Study generics and utility types (1 week)
- [ ] Convert existing project to TypeScript (2 weeks)

## Notes
Allocate at least 5 hours per week for this learning project.
Focus on practical applications rather than just theory.
```

## 8. Decision Record Card

```markdown
# Decision: Database Migration to PostgreSQL

<!--
id:: vwx56
card:: Decision: Database Migration to PostgreSQL
description:: Documentation of the decision to migrate from MySQL to PostgreSQL
project:: infrastructure
priority:: normal
created:: 2023-05-20T11:30:00Z
status:: NOTE
tags:: #decision #database #architecture
-->

## Context
Our current MySQL database is struggling with the increasing load and complex queries. We need a more robust solution that can handle our analytical workloads while maintaining ACID compliance.

## Options Considered

### Option 1: Optimize Current MySQL Setup
- Pros: Less disruption, familiar technology
- Cons: May only be a temporary solution, limited analytical capabilities

### Option 2: Migrate to PostgreSQL
- Pros: Better handling of complex queries, robust features, excellent JSON support
- Cons: Migration effort, team learning curve

### Option 3: Implement a Hybrid Solution
- Pros: Best of both worlds, specialized tools for different needs
- Cons: Increased complexity, data synchronization challenges

## Decision
We will migrate from MySQL to PostgreSQL for our primary database.

## Rationale
PostgreSQL offers superior performance for our analytical queries, better scalability, and advanced features like table partitioning that we need. The migration effort is justified by the long-term benefits.

## Implementation Plan
1. Set up PostgreSQL in parallel environment
2. Develop migration scripts
3. Test with a subset of data
4. Perform performance testing
5. Plan for cutover with minimal downtime
6. Execute migration
7. Monitor and optimize

## Consequences
- Development team will need PostgreSQL training
- Some ORM code will need to be updated
- Monitoring and backup procedures will need to be updated
- Improved query performance and analytical capabilities
```

These examples cover a wide range of card types and use cases in the brain system. Use them as references when creating your own cards, adapting them to your specific needs and workflows. 