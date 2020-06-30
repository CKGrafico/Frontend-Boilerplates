---
id: phaser
title: Phaser + React + TS
---
<h2 align="center">Phaser - Boilerplate Features <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/phaser.png" align="left" width="35" title="Boilerplate" /></h2>

<p align="center">
  <a href="https://codesandbox.io/s/github/CKGrafico/Frontend-Boilerplates/tree/phaser"><img src="https://img.shields.io/badge/CodeSandbox-template-blue?logo=codesandbox" alt="Open in CodeSandbox" /></a>
  <a href="https://travis-ci.org/CKGrafico/Frontend-Boilerplates"><img src="https://travis-ci.org/CKGrafico/Frontend-Boilerplates.svg?branch=basic" alt="Build Status" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/releases"><img src="https://img.shields.io/badge/Update%20status-Frequently-brightgreen" alt="Update Status" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/blob/basic/LICENSE"><img src="https://img.shields.io/github/license/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub license" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/network"><img src="https://img.shields.io/github/forks/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub forks" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/issues"><img src="https://img.shields.io/github/issues/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub issues" /></a>
</p>

# Note: THIS IS AN ALPHA VERSION DON'T USE IN PRODUCTION :)

Most relevant technologies used in the Boilerplate:

- **Phaser:** Game engine for JavaScript.
- **React:** A JavaScript library for building user interfaces.
- **Akita:** Global State Management system based in RxJS.
- **TypeScript:** All the code uses TypeScript.
- **SASS:** Scss structure with good practises.
- **Linting:** Linting for JavaScript and SASS.
- **BEM (Non strict) + BEMIT:** Some conventions for CSS classes.
- **Yarn:** In React Project we have change NPM for Yarn.

### 📚 Setup and scripts

> Before start [download](https://github.com/CKGrafico/Frontend-Boilerplates/archive/phaser.zip) or clone the boilerplate.
> **Install** all the dependencies.

```shell
$ yarn
```

**Run** the project for local development.

```shell
$ yarn start
```

**Build** the project for a production environment.

```shell
$ yarn build
```

If you want to **test**, there are some options.

```shell
$ yarn test # (Will run unit and e2e tests)
$ yarn test:unit # (Only unit tests)
$ yarn test:e2e # (Only e2e tests)
```

The **linting** is configured with [**husky**](https://github.com/typicode/husky) and will run before push, but you can run it.

```shell
$ yarn lint # (Will run scripts and styles linting)
$ yarn lint:scripts # (Only scripts lint)
$ yarn lint:styles # (Only styles lint)
```

