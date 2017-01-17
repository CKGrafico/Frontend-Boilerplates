# Gulp-Boilerplates
<p align="center">
  <a href="https://raw.githubusercontent.com/CKGrafico/Gulp-Boilerplates/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg"
         alt="license">
  </a>
  <a href="https://david-dm.org/CKGrafico/Gulp-Boilerplates">
    <img src="https://david-dm.org/CKGrafico/Gulp-Boilerplates/status.svg"
         alt="dependency status">
  </a>
</p>

## Quickstart
On this repo you can find some boilerplates based on Gulp, each branch has a different example.
We try not only to use Gulp, also to use best practises and real examples that we can use on real projects.
- **master:** Stable version of a basic and generic example. [Finishing]
- **dev:** Dev version of a basic and generic example.
- **node-master:** Stable version of node-based example. [To do]
- **node-dev:** Dev version of node-based example.
- **ng2-master:** Stable version of angular2-based example. [To do]
- **ng2-dev:** Dev version of angular2-based example.

## App Technologies
On this branch _(Basic)_ we use:
- **BEM + BEMIT + etc:** A mix of BEM and related-BEM technologies to create conventions for CSS classes.
- **EcmaScript2015:** All the code uses this version of ES, also gulp files.
- **jQuery:** Only to show how to import an external library.
- **Linting:** Linting for JavaScript and SASS.
- **Normalize:** Normalize our css, you can extend it easily.
- **SASS:** Scss structure with good practises.

## Tasks Technologies
On this branch _(Basic)_ we use:
- **Gulp Autoprefixer:** Add browser prefixes for last two versions of the browsers.
- **Gulp Clean CSS:** To minify CSS.
- **Gulp Connect:** Preview website on local server.
- **Gulp Environment:** Call to different tasks depending of the environment.
- **Gulp Eslint:** Linting for JavaScript.
- **Gulp Fontmin:** Generate fonts from .ttf.
- **Gulp Imagemin:** Compress images.
- **Gulp Load plugins:** Load all the plugins once.
- **Gulp Newer:** On some tasks we want to do something only with the newer files.
- **Gulp Noop:** Basic Noop but on stream.
- **Gulp Rollup:** To transpile out code.
- **Gulp Sass:** Compile Scss to CSS.
- **Gulp Sasslint:** Linting for SASS.
- **Gulp Sourcemaps:** Generate Sourcemaps when is necessary.
- **Gulp Uglify:** Minify and obfuscate JavaScript.
- **Opn:** Open browser to see the preview.
- **Require tasks:** Load all gulp tasks once.
- **Rollup Babel:** To use Babel with Rollup _(ES2015 -> ES5)_.
- **Require CommonJS:** Uses CommonJS for modules.
- **Require Inject:** Include external dependencies to our code.
- **Require Node Resolve:** Uses node resolution for path names.
- **Run Secuence:** Using instead of gulp series (migrating to this)
- **Yarn:** Instead of NPM.

## Running tasks
To run the tasks we have these three commands:
- Running tasks on development mode:
> yarn run dev

- Running tasks on production mode:
> yarn run prod

- Running tasks on watch mode:
> yarn run watch

## Project structure
On this branch _(Basic)_ the structure is:`
```
./
│
├── app/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── OpenSans
│   │   │       ├── OpenSans-Regular.ttf
│   │   │       ├── ...
│   │   │       └── OpenSans-SemiboldItalic.ttf
│   │   │
│   │   └── images/
│   │       └── example.jpg
│   │
│   ├── js/
│   │   └── app.js
│   │
│   └── scss/
│       ├── base
│       │   ├──  mixins # Some mixins to use on base folder
│       │   ├── _fonts.scss # Load the fonts for your project.
│       │   ├── _globals.scss # Global styles.
│       │   ├── _states.scss # States classes, like is-hidden, is-visible...
│       │   ├── _utilities.scss # Utility classes, like u-mt-10@xs _(margin-top 10px on media screen xs)_
│       │   └── _variables.scss # Global variables of the project
│       │
│       ├── components
│       │   └── _ck-site.scss # Example of BEM based component
│       │
│       ├── vendor
│       │  └── _ck-site.scss # Example of BEM based component
│       │
│       └── index.html
├── app/
```

