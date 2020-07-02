---
id: phaser
title: Phaser + React + TS
---
<p align="center">
  <a id="logos" class="anchor" aria-hidden="true" href="#logos"></a><br/>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/basic#logos"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/spa-d.png" alt="JavaScript Boilerplate" width="150"></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/vue#logos"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/vue-d.png" alt="Vue Boilerplate" width="150"></a>
   <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/react#logos"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/react-d.png" alt="React Boilerplate" width="150"></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/ts#logos"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/ts-d.png" alt="TypeScript Boilerplate" width="150"></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/phaser#logos"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/phaser.png" alt="Phaser Boilerplate" width="150"></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/cypress#logos"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/cypress-d.png" alt="Cypress Boilerplate" width="150"></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/nuxt#logos"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nuxt-d.png" alt="Nuxt Boilerplate" width="150"></a>
   <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/node-ts#logos"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nodets-d.png" alt="Node and TS Boilerplate" width="150"></a>
</p>
<h1 align="center">Frontend Boilerplates</h1>

### Overview

This repository is a group of **boilerplates** including some **good practises** and **tips** that you can follow in your projects. There are different technologies separated by branches but with similar structures to write **scalable** applications. Some of them include [JavaScript](https://github.com/CKGrafico/Frontend-Boilerplates/tree/basic#logos), [TypeScript](https://github.com/CKGrafico/Frontend-Boilerplates/tree/ts#logos), [Vue](https://github.com/CKGrafico/Frontend-Boilerplates/tree/vue#logos) or [React](https://github.com/CKGrafico/Frontend-Boilerplates/tree/react#logos). **Click on the logos** to navigate through them.

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

### 🎩 Contributors

This project is possible thanks to the contributors.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://CKgrafico.com"><img src="https://avatars1.githubusercontent.com/u/2048511?v=4" width="150px;" alt=""/><br /><sub><b>Quique Fdez Guerra</b></sub></a><br /><a href="#platform-ckgrafico" title="Packaging/porting to new platform">📦</a> <a href="https://github.com/CKGrafico/Frontend-Boilerplates/commits?author=ckgrafico" title="Code">💻</a> <a href="#tool-ckgrafico" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/spertusatti"><img src="https://avatars0.githubusercontent.com/u/25738279?v=4" width="150px;" alt=""/><br /><sub><b>Sabrina Pertusatti</b></sub></a><br /><a href="https://github.com/CKGrafico/Frontend-Boilerplates/commits?author=spertusatti" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/victor-gamez/"><img src="https://avatars0.githubusercontent.com/u/14943217?v=4" width="150px;" alt=""/><br /><sub><b>Víctor Gámez</b></sub></a><br /><a href="https://github.com/CKGrafico/Frontend-Boilerplates/commits?author=VGamezz19" title="Code">💻</a></td>
    <td align="center"><a href="http://kryzh.com"><img src="https://avatars1.githubusercontent.com/u/2675648?v=4" width="150px;" alt=""/><br /><sub><b>Alex Kryzhanovskyy</b></sub></a><br /><a href="https://github.com/CKGrafico/Frontend-Boilerplates/commits?author=AlexKryzh" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jcarloslr10"><img src="https://avatars0.githubusercontent.com/u/15978818?v=4" width="150px;" alt=""/><br /><sub><b>Juan Carlos</b></sub></a><br /><a href="https://github.com/CKGrafico/Frontend-Boilerplates/commits?author=jcarloslr10" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

