# Agent Code Assistant - System Instructions
+ [brain_imdone](https://github.com/wrenchchatrepo/brain_imdone)

## Project Overview
This project is a **card-based notes and instruction Kanban system**, inspired by `imdone`. It provides structured task tracking, documentation, and system instructions while recording our development journey—including wins, technical debt, and mistakes to avoid in the future.

## Documentation Guidelines
We will document the following as we develop:

- **Wins**: What worked well, key breakthroughs, and efficient solutions.
- **Tech Debt**: Workarounds, shortcuts, or incomplete solutions that need future refactoring.
- **Mistakes**: Issues we encountered and lessons learned to prevent recurrence.
- **Architecture & Design Decisions**: Rationale behind core design choices and trade-offs.
- **Implementation Notes**: Key details on code structure, dependencies, and integrations.

## ✅ Development Checklist

### 🔹 Initial Setup
- [ ] Set up project repo and directory structure.
- [ ] Initialize version control (`git init` and configure `.gitignore`).
- [ ] Set up environment (`venv`, `requirements.txt`, or `package.json` depending on stack).
- [ ] Define system architecture and core components.

### 🔹 Core Features
- [ ] Implement card-based task management.
- [ ] Integrate `imdone` for Kanban functionality.
- [ ] Design data persistence layer (files, database, or in-memory storage).
- [ ] Implement Markdown-based documentation system.
- [ ] Develop search and filtering for notes/tasks.
- [ ] Add customizable tagging and categorization.
- [ ] Build user-friendly CLI and/or GUI.

### 🔹 Enhancements & Automation
- [ ] Add AI-assisted summarization of notes.
- [ ] Automate documentation updates from task statuses.
- [ ] Implement synchronization with external tools (GitHub Issues, Notion, etc.).
- [ ] Introduce API endpoints (if applicable).

### 🔹 Testing & Deployment
- [ ] Write unit and integration tests.
- [ ] Conduct performance benchmarking.
- [ ] Set up CI/CD pipelines.
- [ ] Deploy MVP and gather user feedback.

## 📌 Notes & Development Logs
### **Wins**
_(Document key achievements here)_

### **Tech Debt**
_(List workarounds or incomplete solutions that need future fixes)_

### **Mistakes & Lessons Learned**
_(Record issues encountered and how to avoid them in the future)_

This document will evolve as we build. Feel free to add new insights as we progress!

# Python Engineer IDE Rules

## ✅ Recommended Rules for Python Engineers Managing Multiple Projects

### **1️⃣ Code Quality & Consistency**
- **Use a Linter & Formatter:**
  - Enforce PEP 8 styling with **`ruff`** (faster than `flake8`).
  - Auto-format code with **`black`**.
  - Sort imports with **`isort`**.
  - Use **`mypy`** for static type checking.
  
  **VS Code / PyCharm Setup:**
  - Configure **pre-commit hooks** to auto-format on commit.
  - Enable **editor auto-save + format on save**.

  **Pre-commit config:**
  ```yaml
  repos:
    - repo: https://github.com/psf/black
      rev: 23.1.0
      hooks:
        - id: black
    - repo: https://github.com/charliermarsh/ruff-pre-commit
      rev: v0.1.6
      hooks:
        - id: ruff
    - repo: https://github.com/timothycrosley/isort
      rev: 5.12.0
      hooks:
        - id: isort
    - repo: https://github.com/pre-commit/mirrors-mypy
      rev: v1.2.0
      hooks:
        - id: mypy
  ```

### **2️⃣ Documentation & Tech Debt Tracking**
- **Markdown Rules:**
  - Enforce **`.md` linting** with `markdownlint` or `prettier`.
  - Auto-generate **docstrings** with `pydocstyle` (`pydocstyle --convention=google` for Google-style docstrings).
  - Use `mkdocs` for project documentation.

- **Git Commit Rules:**
  - Require commit messages to mention **tech debt or documentation updates**:
    ```json
    {
      "commit-msg": "^[A-Z]{3,6}-\\d+: .{15,}$"
    }
    ```
  - Reject commits **without updated README/docs** when modifying core files.

- **IDE Configurations:**
  - Auto-generate **TODO** lists from `# TODO:` and `FIXME:` comments in VS Code/PyCharm.

### **3️⃣ Dependency & Virtual Env Management**
- **Use `pip-tools` for Dependency Management:**
  - Lock dependencies with `pip-compile` instead of `requirements.txt`.
  - Auto-update dependencies weekly with a GitHub Action.

- **IDE Configurations:**
  - Always load **virtual environments per project** (`.venv/`).
  - Enable **Python version enforcement** per workspace (`.python-version` via `pyenv`).

---

### **4️⃣ Performance & Security Checks**
- **Security Rules:**
  - Scan for vulnerabilities with `bandit` (`bandit -r src`).
  - Prevent committing secrets with `trufflehog` or `gitleaks`.

- **Performance Monitoring:**
  - Detect slow code with `scalene` or `pyinstrument`.
  - Warn on **N+1 queries** in Django/SQLAlchemy.

---

### **5️⃣ Git & CI/CD Workflow Rules**
- **Pre-merge checks:**
  - Require **tests to pass before merging** (`pytest` + `coverage` > 90%).
  - Ensure **docs are updated for major changes**.
  - Enforce **branch naming conventions**:
    ```json
    {
      "branch-name": "^(feature|bugfix|hotfix|chore)/[a-z0-9._-]+$"
    }
    ```

- **Automate Releases:**
  - Use `semantic-release` for automated versioning.
  - Auto-publish Python packages with GitHub Actions.

---

### **6️⃣ Project Structure Standardization**
- **Project layout:**
  ```
  ├── src/
  │   ├── __init__.py
  │   ├── main.py
  │   ├── module/
  │   └── tests/
  ├── docs/
  ├── .pre-commit-config.yaml
  ├── .github/workflows/
  ├── pyproject.toml
  ├── requirements.in
  ├── requirements.txt
  ├── .venv/
  └── README.md
  ```
- **Enforce file structure rules** using `cookiecutter` templates for consistency.

---

## 🔧 **Summary**
- ✅ **Use `black`, `ruff`, `isort`, `mypy` for code quality.**
- ✅ **Track tech debt & enforce docs with pre-commit hooks.**
- ✅ **Prevent bad commits with Git commit & branch rules.**
- ✅ **Manage dependencies properly with `pip-tools`.**
- ✅ **Automate security & performance checks.**
