## 2. Python Runbook Generator (FastAPI)

### Technology Stack

1. **Backend Framework**: FastAPI
2. **Language**: Python 3.10+
3. **Data Validation**: Pydantic v2
4. **Database**: 
   - SQLite for development
   - PostgreSQL for production
5. **ORM**: SQLAlchemy 2.0
6. **Authentication**: JWT with Python-JOSE
7. **AI Integration**: 
   - OpenAI API (based on your requirements.txt)
   - Anthropic API (based on your requirements.txt)
   - Google Generative AI (based on your requirements.txt)
8. **File Handling**: Python standard library
9. **Deployment**: Docker + Cloud Run or similar
10. **Testing**: Pytest

### Cursor Rules Recommendations

1. **Primary Rule**: [FastAPI Python Cursor Rules by Caio Barbieri](https://cursor.directory/fastapi-python-cursor-rules)
   - Excellent for FastAPI development with Python
   - Focuses on performance optimization and error handling

2. **For AI Integration**:
   - Custom rules for AI model integration and prompt engineering
   - Focus on error handling and fallback mechanisms

3. **For Database Operations**:
   - Include SQLAlchemy-specific patterns and best practices

4. **For Testing**:
   - Add Pytest-specific patterns for comprehensive testing

### Implementation Approach

1. **Project Structure**:
   ```
   /app
     /api
       /endpoints      # API endpoints
       /dependencies   # Dependency injection
     /core             # Core functionality
       /config.py      # Configuration
       /security.py    # Authentication
     /db
       /models.py      # Database models
       /session.py     # Database session
     /schemas          # Pydantic models
     /services         # Business logic
       /runbook        # Runbook generation
       /ai             # AI integration
     /utils            # Utility functions
   /tests              # Test cases
   ```

2. **Key Features**:
   - API endpoints for uploading log files or scripts
   - Configuration file parsing
   - AI-powered runbook generation
   - Authentication for API access
   - Versioning for generated runbooks
   - Feedback mechanism for improving runbook quality

## Integration with Your Existing Project

Based on the `/Users/dionedge/dev/goo10burg` project structure I examined, I notice it's a Flask application with AI integration (OpenAI, Anthropic, and Google Generative AI). You can leverage several components from this project:

1. **For the FastAPI Runbook Generator**:
   - The AI integration code in `generator.py` can be adapted
   - Configuration management from `config.py`
   - Utility functions from the `utils` directory

2. **For the Next.js Portfolio**:
   - You can showcase the runbook generator as a portfolio project
   - Create an API route that interfaces with the FastAPI backend

## Cursor Rules Implementation

To implement these Cursor rules in your project:

1. Create a `.cursorrules` file in the root of each project
2. Copy the content from the corresponding Cursor Directory rule
3. Customize as needed for your specific project requirements

For example:

**For Next.js Portfolio**:
```
# .cursorrules
You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI and Tailwind.

# Code Style and Structure
- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
- Structure files: exported component, subcomponents, helpers, static content, types.

# Naming Conventions
- Use lowercase with dashes for directories (e.g., components/auth-wizard).
- Favor named exports for components.

# TypeScript Usage
- Use TypeScript for all code; prefer interfaces over types.
- Avoid enums; use maps instead.
- Use functional components with TypeScript interfaces.

...
```

**For FastAPI Runbook Generator**:
```
# .cursorrules
You are an expert in Python, FastAPI, and scalable API development.

# Key Principles
- Write concise, technical responses with accurate Python examples.
- Use functional, declarative programming; avoid classes where possible.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., is_active, has_permission).
- Use lowercase with underscores for directories and files (e.g., routers/user_routes.py).
- Favor named exports for routes and utility functions.
- Use the Receive an Object, Return an Object (RORO) pattern.

# Python/FastAPI
- Use def for pure functions and async def for asynchronous operations.
- Use type hints for all function signatures. Prefer Pydantic models over raw dictionaries for input validation.
- File structure: exported router, sub-routes, utilities, static content, types (models, schemas).

...
```