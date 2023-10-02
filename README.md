![tests](https://github.com/ynab-analyzer/ynab-analyzer-frontend-react/actions/workflows/tests.yml/badge.svg)
![lint](https://github.com/ynab-analyzer/ynab-analyzer-frontend-react/actions/workflows/lint.yml/badge.svg)
[![codecov](https://codecov.io/gh/ynab-analyzer/ynab-analyzer-frontend-react/graph/badge.svg?token=PHQ3RGVR17)](https://codecov.io/gh/ynab-analyzer/ynab-analyzer-frontend-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

# YNAB Analyzer

TBD: Simple overview of use/purpose.

## Description

TBD: An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies
This project is intended to be executed and modified from within a [Visual Studio Code Dev Container](https://code.visualstudio.com/docs/devcontainers/containers). This allows for platform agnostic development and eliminates the need for custom workspace configuration. To utilize dev containers, download and install the following:
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [VSCode Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Installing

1. Clone repository to your local workspace
2. Open repository in Visual Studio Code
3. Open your Next.js project in a dev container by pressing Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (macOS) to open the Command Palette, typing "Remote-Containers: Reopen in Container" and selecting it from the list. Wait for the Devcontainer to build and open in a new VS Code window.
4. Execute `npm install` within the dev container to generate the `node_modules` folder.

### Running Program
In your project's root directory, execute the following to start a dev server on `localhost:3000`:

```
npm run dev
```

### Executing Unit Tests
Select one of the following commands from below, depending on your desire to execute the tests in `--watch` mode or whether you wish for coverage to be generated.

```
npm run (test || test:watch || test:cov || test:watch:cov)
```

### Executing E2E Tests
**Note**: E2E tests must be executed from your local machine, not the dev container. In the future, these will probably be moved into their own repo so they can be easily executed on both frontend and backend changes.

Select one of the following commands from below, depending on your desire to execute the tests in `headless` mode or not.

```
npm run (cypress || cypress:open)
```

## Authors

[@CaseyHoover](https://github.com/CaseyHoover)

## Version History

N/A

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
