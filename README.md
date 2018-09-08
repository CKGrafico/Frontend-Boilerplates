# Frontend Boilerplates
Some examples of **good practises**, **tips**, and **boilerplates** that I like to follow. You will find the different technologies on the branches and we will add more examples in the future. 

Feel free to give feedback and improvements to the repo.

[<img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/spa.png" width="150" title="SPA">](https://github.com/CKGrafico/Frontend-Boilerplates/tree/master)
[<img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/ts.png" width="150" title="TypeScript">](https://github.com/CKGrafico/Frontend-Boilerplates/tree/ts-master)
[<img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/vue.png" width="150" title="Vuejs">](https://github.com/CKGrafico/Frontend-Boilerplates/tree/vue-master)
[<img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/nuxt.png" width="150" title="Nuxt">](https://github.com/CKGrafico/Frontend-Boilerplates/tree/nuxt-master)
[<img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/nodets.png" width="150" title="Nodejs with TypeScript">](https://github.com/CKGrafico/Frontend-Boilerplates/tree/node-ts-master)

## Quickstart
<img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/spa.png" align="left" width="50" title="SPA">

 **[master:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/master)** Stable version of a **basic SPA** example with SCSS and ES6.
 <br>**[dev:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/dev)** Dev version of a **basic SPA** example with SCSS and ES6.
 
 <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/ts.png" align="left" width="50" title="TypeScript">

 **[ts-master:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/ts-master)** Stable version of a **TypeScript** example with SCSS.
 <br>**[ts-dev:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/ts-dev)** Dev version of a **TypeScript** example with SCSS.

  <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/vue.png" align="left" width="50" title="Vue">

 **[vue-master:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/vue-master)** Stable version of a **Vuejs** example with SCSS and TypeScript.
 <br>**[vue-dev:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/vue-dev)** Dev version of a **Vuejs** example with SCSS and TypeScript.

   <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/nuxt.png" align="left" width="50" title="Nuxt">

 **[nuxt-master:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/nuxt-master)** Stable version of a **Nuxt** example with SCSS and TypeScript.
 <br>**[nuxt-dev:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/nuxt-dev)** Dev version of a **Nuxt** example with SCSS and TypeScript.
 
 <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/gh-pages/resources/techs/nodets.png" align="left" width="50" title="Node with TypeScript">

 **[node-ts-master:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/node-ts-master)** Stable version of a **Nodejs with TypeScript** example with SCSS and Nodejs.
 <br>**[node-ts-dev:](https://github.com/CKGrafico/Frontend-Boilerplates/tree/node-ts-dev)** Dev version of a **Nodejs with TypeScript** example with SCSS and Nodejs.
 
## 🍩 Boilerplate Features
On this branch we use:
- **BEM + BEMIT + etc:** A mix of BEM and related-BEM technologies to create conventions for CSS classes.
- **TypeScript:** All the code uses TypeScript.
- **Linting:** Linting for TypeScript and SASS.
- **SASS:** Scss structure with good practises.
- **Vue:** The progressive JavaScript framework.

**[⬆️ back to top](#quickstart)**

## ⚙️ Automated Tasks
On this branch we use:
- **Webpack:** Scripts tasks.
- **Gulp:** Styles and assets tasks.

**[⬆️ back to top](#quickstart)**

## ⏰ Running tasks
To run the tasks we have these three commands:
- Install dependencies:
> npm install

- Running tasks on production mode:
> npm run prod

- Running tasks on development mode:
> npm run dev

- Running tasks on watch mode and serve the app:
> npm start

**[⬆️ back to top](#quickstart)**

## ⛩️ Project structure
On this branch the structure is:`
```
├── .babelrc
├── .gitignore
├── .gulpenvrc
├── .stylelintrc
├── LICENSE
├── README.md
├── gulpfile.js
├── mocha-webpack.opts
├── package-lock.json
├── package.json
├── src
|  ├── app
|  |  ├── app.component.vue
|  |  ├── app.container.ts
|  |  ├── app.filters.ts
|  |  ├── app.router.ts
|  |  ├── app.ts
|  |  ├── cities
|  |  |  ├── cities.component.vue
|  |  |  ├── cities.component.vue.html
|  |  |  ├── cities.component.vue.scss
|  |  |  ├── cities.component.vue.ts
|  |  |  ├── cities.container.ts
|  |  |  ├── cities.routes.ts
|  |  |  ├── city-detail
|  |  |  |  ├── city-detail.component.vue
|  |  |  |  ├── city-detail.component.vue.html
|  |  |  |  ├── city-detail.component.vue.scss
|  |  |  |  └── city-detail.component.vue.ts
|  |  |  ├── city-list
|  |  |  |  ├── city-list.component.vue
|  |  |  |  ├── city-list.component.vue.html
|  |  |  |  ├── city-list.component.vue.scss
|  |  |  |  └── city-list.component.vue.ts
|  |  |  ├── index.ts
|  |  |  └── shared
|  |  |     ├── city-add
|  |  |     └── index.ts
|  |  ├── core
|  |  |  ├── decorators
|  |  |  |  ├── index.ts
|  |  |  |  └── inject.decorator.ts
|  |  |  ├── helpers
|  |  |  |  ├── index.ts
|  |  |  |  └── next-tick.ts
|  |  |  ├── ifilter.ts
|  |  |  ├── index.ts
|  |  |  └── seeds
|  |  |     ├── base.seed.ts
|  |  |     ├── cities.seed.ts
|  |  |     └── index.ts
|  |  ├── shared
|  |  |  ├── cities
|  |  |  |  ├── cities.service.ts
|  |  |  |  ├── city.model.ts
|  |  |  |  ├── icities.service.ts
|  |  |  |  └── index.ts
|  |  |  ├── date
|  |  |  |  ├── date.service.spec.ts
|  |  |  |  ├── date.service.ts
|  |  |  |  ├── idate.service.ts
|  |  |  |  └── index.ts
|  |  |  ├── index.ts
|  |  |  ├── loading.component.vue
|  |  |  ├── translate
|  |  |  |  ├── index.ts
|  |  |  |  ├── itranslate.service.ts
|  |  |  |  └── translate.service.ts
|  |  |  └── weather
|  |  |     ├── index.ts
|  |  |     ├── weather-codes.enum.ts
|  |  |     ├── weather-icons.model.ts
|  |  |     └── weather.model.ts
|  |  ├── vendor
|  |  |  ├── bootstrap.ts
|  |  |  └── index.ts
|  |  └── weather
|  |     ├── index.ts
|  |     ├── shared
|  |     |  ├── index.ts
|  |     |  ├── iweather.service.ts
|  |     |  └── weather.service.ts
|  |     ├── weather-detail
|  |     |  ├── weather-detail.component.vue
|  |     |  ├── weather-detail.component.vue.html
|  |     |  ├── weather-detail.component.vue.scss
|  |     |  └── weather-detail.component.vue.ts
|  |     ├── weather-list
|  |     |  ├── weather-list.component.vue
|  |     |  ├── weather-list.component.vue.html
|  |     |  ├── weather-list.component.vue.scss
|  |     |  └── weather-list.component.vue.ts
|  |     ├── weather.component.vue
|  |     ├── weather.container.ts
|  |     └── weather.routes.ts
|  ├── assets
|  |  ├── fonts
|  |  |  ├── OpenSans
|  |  |  |  ├── OpenSans-Bold.ttf
|  |  |  |  ├── OpenSans-ExtraBold.ttf
|  |  |  |  ├── OpenSans-Italic.ttf
|  |  |  |  ├── OpenSans-Light.ttf
|  |  |  |  ├── OpenSans-Regular.ttf
|  |  |  |  └── OpenSans-Semibold.ttf
|  |  |  └── WeatherIcons
|  |  |     ├── WeatherIcons-Regular.eot
|  |  |     ├── WeatherIcons-Regular.otf
|  |  |     ├── WeatherIcons-Regular.svg
|  |  |     ├── WeatherIcons-Regular.ttf
|  |  |     └── WeatherIcons-Regular.woff
|  |  └── images
|  |     └── example.jpg
|  ├── index.html
|  ├── locale
|  |  ├── en.locale.json
|  |  └── es.locale.json
|  ├── styles
|  |  ├── app.scss
|  |  ├── base
|  |  |  ├── _fonts.scss
|  |  |  ├── _globals.scss
|  |  |  ├── _icons.scss
|  |  |  ├── _states.scss
|  |  |  ├── _utilities.scss
|  |  |  ├── _variables.scss
|  |  |  └── mixins
|  |  |     ├── _fonts.scss
|  |  |     ├── _icomoon.scss
|  |  |     └── _medias.scss
|  |  └── vendor
|  |     ├── _bootstrap.scss
|  |     ├── _normalize.scss
|  |     └── _weather-icons.scss
|  └── typings
|     ├── vue-shim.d.ts
|     └── vue.d.ts
├── tasks
|  ├── config
|  |  ├── helpers.js
|  |  └── options.js
|  ├── gulp
|  |  ├── assets.js
|  |  ├── clean.js
|  |  ├── copy.js
|  |  ├── serve.js
|  |  ├── styles-lint.js
|  |  ├── styles.js
|  |  └── watch.js
|  └── webpack
|     ├── loaders
|     |  └── components-name.loader.js
|     ├── plugins
|     |  ├── globals.js
|     |  ├── uglify.js
|     |  └── vue.js
|     └── rules
|        ├── components.js
|        ├── lint.js
|        └── scripts.js
├── tasks.config.json
├── tsconfig.json
├── tsconfig.mocha.js
├── tslint.json
└── webpack.config.js
```

**[⬆️ back to top](#quickstart)**

## ⚡ Gulp and Webpack

### Gulpfile
This is how we configured the main file:
```
// We load all the tasks and pass some parameters
let tasks = require('require.all')('./tasks');
tasks((name, task) => { func = () => task(gulp, paths, $, _, tasks); func.displayName = name; return func});
// paths is for all the project paths
// $ is for plugins
// _ is for helpers
```

And these are the only two tasks:
```
gulp.task('default', gulp.series(tasks.clean, tasks.stylesLint, tasks.styles, tasks.copy, tasks.assets));
gulp.task('watcher', gulp.parallel(tasks.serve, tasks.watch));
```

### Tasks configuration
You can configure different things related with the tasks.
```
{
    "app": {
        "assets": {
            "images": {}
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
{
    "app": {
        "assets": {
            "images": {},
            "fonts": {
                "files": "**/*.ttf",
                "folder": "custom"
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
// ./app/assets/custom/**/*.ttf
```

Also you can use the parent folder

```
{
    "app": {
        "assets": {
            "images": {},
            "fonts": {
                "files": "**/*.ttf",
                "folder": "custom"
                "roboto": {
                    "files": "Roboto.ttf",
                    "folder": "..",
                }
            }
        }
    }
};
```
And the result will look like that:
```
_.folder(paths.assets.fonts.roboto);
// ./app/assets/fonts/

_.files(paths.assets.fonts.roboto)
// ./app/assets/fonts/roboto.ttf
```

**[⬆️ back to top](#quickstart)**

## 🎩 Contributors

| <img src="https://i.imgur.com/CcJ7vXL.jpg" width="150"><br>**Quique Fdez Guerra**<br>[👨‍💻](https://github.com/CKGrafico)[🌍](http://ckgrafico.com)[🐦](https://twitter.com/CKGrafico) | <img src="https://i.imgur.com/W8Ks7Ss.jpg" width="150"><br>**Juan Carlos**<br>[👨‍💻](https://github.com/jcarloslr10)[🌍](http://plainconcepts.com)[🐦](https://twitter.com/jcarloslr10) | <img src="https://i.imgur.com/kLqGDso.jpg" width="150"><br>**Alex Kryzhanovskyy**<br>[👨‍💻](https://github.com/AlexKryzh)[🌍](http://kryzh.com)[🐦](https://twitter.com/AlexKryzh) | <img src="https://i.imgur.com/ScMiaNz.png" width="150"><br>**Victor Gamez**<br>[👨‍💻](https://github.com/VGamezz19) | <img src="https://i.imgur.com/idu3Mnw.png" width="150"><br>**PlainConcepts**<br>[👨‍💻](https://github.com/PlainConcepts)[🌍](http://plainconcepts.com)[🐦](https://twitter.com/PlainConcepts)|
| :---: | :---: | :---: | :---: | :---: |

[View Contributors](https://github.com/CKGrafico/Frontend-Boilerplates/graphs/contributors)

## 📜 License

(The MIT License)

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆️ back to top](#quickstart)**
