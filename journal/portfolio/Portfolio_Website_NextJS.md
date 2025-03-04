# Portfolio Website NextJS

<!-- PLANNING: Portfolio Website NextJS
created::2024-03-03T19:02:00Z
priority::high
due::2024-03-31T00:00:00Z
owner::@dionedge
estimate::40h
project::portfolio
-->

Description:
- Purpose: Create a modern portfolio website using NextJS
- Scope: Full-stack development with modern technologies

Tasks:
- [ ] Setup NextJS project
- [ ] Configure TypeScript
- [ ] Add TailwindCSS
- [ ] Implement responsive design
- [ ] Create project showcase section
- [ ] Add blog functionality
- [ ] Setup contact form
- [ ] Configure deployment
- [ ] Add analytics
- [ ] Implement SEO optimization

Tech Stack:
- NextJS 14
- TypeScript
- TailwindCSS
- Prisma
- PostgreSQL
- Vercel

Notes:
- Focus on performance and SEO
- Ensure mobile-first design
- Include dark mode support
- Add interactive elements

Related:
- journal/portfolio/Visualization.md
- reference/documentation_links.md

#portfolio #nextjs #typescript #web

## 1. Data Engineer/AI Developer Portfolio Website (Next.js)

### Technology Stack

1. **Frontend Framework**: Next.js with App Router
2. **Language**: TypeScript
3. **UI Components**: 
   - Shadcn UI
   - Radix UI primitives
4. **Styling**: Tailwind CSS
5. **State Management**: 
   - React Server Components (RSC) for most state
   - Zustand for client-side state (if needed)
6. **Data Fetching**: 
   - Server Components for primary data
   - React Query for client-side data fetching
7. **Authentication**: NextAuth.js or Clerk
8. **Deployment**: Vercel
9. **Analytics**: Vercel Analytics or Google Analytics
10. **Content Management**: 
    - MDX for blog posts
    - GitHub for source control

### Cursor Rules Recommendations

1. **Primary Rule**: [Next.js React TypeScript Cursor Rules by Pontus Abrahamsson](https://cursor.directory/nextjs-react-typescript-cursor-rules)
   - Perfect for the core Next.js application with TypeScript and React
   - Includes guidance for Shadcn UI, Radix UI, and Tailwind

2. **For UI/UX Focused Components**:
   - [Tailwind CSS Cursor Rules](https://cursor.directory/) (if available)
   - Focus on responsive design and accessibility

3. **For Data Visualization Components**:
   - Add specialized rules for any data visualization libraries you'll use (D3.js, Chart.js, etc.)

4. **For Authentication**:
   - Include authentication-specific patterns from the NextAuth.js or Clerk documentation

### Implementation Approach

1. **Project Structure**:
   ```
   /app
     /api          # API routes
     /(auth)       # Authentication routes
     /(dashboard)  # Dashboard routes
     /blog         # Blog pages
     /projects     # Project showcase
     /about        # About page
   /components     # Reusable components
   /lib            # Utility functions
   /public         # Static assets
   /styles         # Global styles
   ```

2. **Key Features**:
   - Server-side rendering for optimal SEO
   - Portfolio project showcases with interactive demos
   - Blog section for technical articles
   - Contact form
   - Dark/light mode
   - Responsive design for all devices

These configurations will help ensure consistent code quality and adherence to best practices throughout your development process.
<!--
order::55
TODO::2025-03-03T18:58:59.781Z
<!--
PLANNING::2025-03-03T19:00:41.904Z
-->
-->