# Gulp-Boilerplates
<p align="center">
  <a href="https://raw.githubusercontent.com/CKGrafico/Gulp-Boilerplates/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg"
         alt="license">
  </a>

  <a href="https://codeclimate.com/github/CKGrafico/Gulp-Boilerplates">
    <img src="https://codeclimate.com/github/CKGrafico/Gulp-Boilerplates/badges/gpa.svg" 
        alt="codeclimate"/>
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
- Install dependencies:
> yarn install

- Running tasks on development mode:
> yarn run dev

- Running tasks on production mode:
> yarn run prod

- Running tasks on watch mode:
> yarn run watch

## Environments
On this project we have two environments:
- **Development:** To use with dev and watch tasks
- **Production:** To minify the code and use on production

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
│       ├── base/
│       │   ├──  mixins # Some mixins to use on base folder
│       │   ├── _fonts.scss # Load the fonts for your project
│       │   ├── _globals.scss # Global styles
│       │   ├── _states.scss # States classes, like is-hidden, is-visible...
│       │   ├── _utilities.scss # Utility classes, like u-mt-10@xs _(margin-top 10px on media screen xs)_
│       │   └── _variables.scss # Global variables of the project
│       │
│       ├── components/
│       │   └── _ck-site.scss # Example of BEM based component
│       │
│       ├── vendor/
│       │  └── _normalize.scss # Import and extend Normalize
│       │
│       └── index.html
│
├── dist/ # Distribution folder
│
├── tasks/ # Gulp tasks
│   ├── assets.js # Minify images and generate fonts
│   ├── clean.js # Clean distribution folder
│   ├── copy.js # Copy index.html to dist
│   ├── scripts.js # Transpile and compress JavaScript depending of the environment
│   ├── scripts-lint.js # Linting for JavaScript
│   ├── scss.js # Compile and compress SASS files when is necessary
│   ├── scss-lint.js # Linting for SASS
│   ├── serve.js # Open a browser with the preview of the project
│   └── watch.js # Watcher for files
│
├── .sass-lint.yml # SASS linting configuration
├── .scripts-lint.yml # JavaScript linting configuration
├── gulpfile.helpers.js # Some methods to use on gulp tasks
├── gulpfile.js # Main gulp file
├── gulpfile.paths.js # Where you can configure the paths to use with tasks
├── package.json # Configure npm tasks and dependencies
└── yarn-lock # Yarn file with the specific version to download of each dependency
```

## Gulpfile
This is how we configured the main file:
```
// We load all the tasks and pass some parameters
require('require-tasks')(['tasks'])(gulp, paths, $, _);
// paths is for all the project paths
// $ is for plugins
// _ is for helpers
```

And these are the only two tasks:
```
gulp.task('default', () => _.series('scss-lint', 'scss', 'scripts-lint', 'scripts', 'copy', 'assets'));
gulp.task('watcher', () => _.series('serve', 'watch'));
```

## Gulpfile Helpers
In case that you want to modify some gulp tasks, this helpers can help you.

- Files and folders:

```
_.folder(paths.app.scripts);
```
Returns the path where the scripts are located, example: _'./app/js/'_

```
_.files(paths.app.scripts)
```
Returns the file pattern to get the scripts, example: _'./app/js/**/*.js'_

```
_.files(paths.app.scripts, _.NOT)
```
Exclude scripts, example: _'!./app/js/**/*.js'_

```
_.series('serve', 'watch'));
```
Use run-sequence to run tasks like gulp-series (we are migrating).

## Gulpfile paths
We tried to do it as easy as possible and this is the result.
We have an object with our paths structure that can be generated automatically and can be extended.

If you open gulpfile.paths and you write this:

```
let paths = {
    app: {
        assets: {
            images: {}
        }
    }
};
```
You can acces to files and folders like:
```
_.folder(paths.assets.images);
// ./app/assets/images/

_.files(paths.assets.images)
// ./app/assets/images/**/*.*
```

But you can extend this structure:

```
let paths = {
    app: {
        assets: {
            images: {},
            fonts: {
                _files: '**/*.ttf',
                _folder: 'custom',
            }
        }
    }
};
```
You can acces to files and folders like:
```
_.folder(paths.assets.fonts);
// ./app/assets/custom/

_.files(paths.assets.fonts)
// ./app/assets/images/**/*.ttf
```

