<p align="center">
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/basic#frontend-boilerplates"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/spa.png" alt="JavaScript Boilerplate" width="140"></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/ts#frontend-boilerplates"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/ts-d.png" alt="TypeScript Boilerplate" width="140"></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/vue#frontend-boilerplates"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/vue-d.png" alt="Vue Boilerplate" width="140"></a>
   <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/react#frontend-boilerplates"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/react-d.png" alt="React Boilerplate" width="140"></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/nuxt#frontend-boilerplates"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nuxt-d.png" alt="Nuxt Boilerplate" width="140"></a>
   <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/node-ts#frontend-boilerplates"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nodets-d.png" alt="Node and TS Boilerplate" width="140"></a>
</p>
<h1 align="center">Frontend Boilerplates</h1>

### Overview
This repository is a group of **boilerplates** including some **good practises** and **tips** that you can follow in your projects. There are different technologies separated by branches but with similar structures to write **scalable** applications. Some of them include [JavaScript](https://github.com/CKGrafico/Frontend-Boilerplates/tree/basic#frontend-boilerplates), [TypeScript](https://github.com/CKGrafico/Frontend-Boilerplates/tree/ts#frontend-boilerplates), [Vue](https://github.com/CKGrafico/Frontend-Boilerplates/tree/vue#frontend-boilerplates) or [React](https://github.com/CKGrafico/Frontend-Boilerplates/tree/react#frontend-boilerplates). **Click on the logos** to navigate through them.

<h2 align="center">Basic SPA - Boilerplate Features <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/spa.png" align="left" width="35" title="Boilerplate"></h2>

<p align="center">
  <a href="https://travis-ci.org/CKGrafico/Frontend-Boilerplates"><img src="https://travis-ci.org/CKGrafico/Frontend-Boilerplates.svg?branch=basic" alt="Build Status"></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/releases"><img src="https://img.shields.io/badge/Update%20status-Occasionally-yellowgreen" alt="Update Status"></a>
  <img src="https://img.shields.io/github/last-commit/CKGrafico/Frontend-Boilerplates/basic.svg" alt="GitHub last commit (branch)">
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/blob/basic/LICENSE"><img src="https://img.shields.io/github/license/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub license"></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/network"><img src="https://img.shields.io/github/forks/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub forks"></a>
  <a href=https://github.com/CKGrafico/Frontend-Boilerplates/issues"><img src="https://img.shields.io/github/issues/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub issues"></a>
</p>

Most relevant technologies used in the Boilerplate:
- **JavaScript:** All the code uses JavaScript.
- **SASS:** SCSS structure with good practises.
- **Linting:** Linting for JavaScript and SASS.
- **BEM (Non strict) + BEMIT:** Some conventions for CSS classes.

### 📚 Setup and scripts
> Before start [download](https://github.com/CKGrafico/Frontend-Boilerplates/archive/basic.zip) or clone the boilerplate.
**Install** all the dependencies.
```shell
$ npm install
```
**Run** the project for local development.
```shell
$ npm start
```
**Build** the project for a production environment.
```shell
$ npm run build
```
If you want to **test**, there are some options.
```shell
$ npm test # (Will run unit and e2e tests)
$ npm run test:unit # (Only unit tests)
$ npm run test:e2e # (Only e2e tests)
```
The **linting** is configured with [**husky**](https://github.com/typicode/husky) and will run before push, but you can run it.
```shell
$ npm run lint # (Will run scripts and styles linting)
$ npm run lint:scripts # (Only scripts lint)
$ npm run lint:styles # (Only styles lint)
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
<!-- ALL-CONTRIBUTORS-LIST:END -->

### ⛳️ Check all the boilerplates

- **[basic:](https://github.com/CKGrafico/Frontend-Boilerplates/tree)** **Basic SPA** example with SCSS and ES6. <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/spa.png" align="right" width="35" title="SPA">

- **[ts:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/ts)** **TypeScript** example with SCSS. <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/ts.png" align="right" width="35" title="TypeScript">

- **[vue:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/vue)** **Vuejs** example with SCSS and TypeScript. <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/vue.png" align="right" width="35" title="Vue">

- **[nuxt:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/nuxt)** **Nuxt** example with SCSS and TypeScript. <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nuxt.png" align="right" width="35" title="Nuxt">

- **[react:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/react)** **React** example with SCSS and TypeScript. <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/react.png" align="right" width="35" title="React">

- **[node-ts:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/node-ts)** **Backend and TypeScript** example with SCSS and Nodejs. <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nodets.png" align="right" width="35" title="Node with TypeScript">
