# Contributing Guide

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## 1. First Steps

### Install Node.js and Git on your device

Ensure you have the latest versions of [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed.

### Clone the repository and install its dependencies

Execute the commands below:

> [!NOTE]  
> Before cloning, navigate to the location where you want to keep the project files.

```
git clone git@github.com:jfmonsa/AtlasBooks-front.git
cd AtlasBooks-front
npm install
```

### To run developer server

```
npm run dev
```

This will start the server on the default port, usually `http://localhost:5173`.

## 2. Contribute

In general, this project follows the [Ship, Show, Ask](https://martinfowler.com/articles/ship-show-ask.html) methodology.

### General Concerns

- Make isolated commits as a good practice. This helps in tracking changes and rolling back if necessary.

### Naming Convention for Pull Requests

- For each feature you want to work on, create a branch with the appropriate prefix:

  - `feature/` for new features
  - `update/` for updates to existing features
  - `fix/` for bug fixes

  Follow this with a descriptive branch name, e.g., `feature/add-user-authentication`.

### Submitting Pull Requests

1. Ensure your branch is up-to-date with the `main` branch.
2. Open a pull request with a clear and descriptive title.
3. Provide a detailed description of the changes you’ve made.
4. Request reviews from relevant team members.

<!--
### Code Style and Testing
- Follow the project's coding standards as outlined in the [style guide](link-to-style-guide).
- Write unit tests for new features and updates.
- Run tests locally before submitting your pull request:
-->
