---
id: cypress
title: Cypress + TypeScript
---
<h2 align="center">Cypress - Boilerplate Features <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/cypress.png" align="left" width="35" title="Boilerplate" /></h2>

<p align="center">
  <a href="https://travis-ci.org/CKGrafico/Frontend-Boilerplates"><img src="https://travis-ci.org/CKGrafico/Frontend-Boilerplates.svg?branch=cypress" alt="Build Status" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/releases"><img src="https://img.shields.io/badge/Update%20status-Frequently-brightgreen" alt="Update Status" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/blob/basic/LICENSE"><img src="https://img.shields.io/github/license/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub license" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/network"><img src="https://img.shields.io/github/forks/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub forks" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/issues"><img src="https://img.shields.io/github/issues/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub issues" /></a>
</p>

Most relevant technologies used in the Boilerplate:

- **Cypress:** Fast, easy and reliable testing for anything that runs in a browser.
- **TypeScript:** All the code uses TypeScript.
- **Linting:** Linting for TypeScript.

### 📚 Setup and scripts

> Before start [download](https://github.com/CKGrafico/Frontend-Boilerplates/archive/ts.zip) or clone the boilerplate.
> **Install** all the dependencies.

```shell
$ npm install
```

**Run CI** tests in CLI mode it also runs a project.

```shell
$ npm test
```

**Run** tests in open mode it also runs a project.

```shell
$ npm run open
```

> Note: You have to modify the `start` script and add the path of your project.

The **linting** is configured with [**husky**](https://github.com/typicode/husky) and will run before push, but you can run it.

```shell
$ npm run lint # (Will run scripts linting)
```

