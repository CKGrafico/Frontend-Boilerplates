---
id: started-tasks
title: Configuring automated tasks
sidebar_label: Configure tasks
---

## Introduction

Some of the Boilerplates are using Gulp and Webpack and some others only Webpack, but all the Boilerplates try to follow the same stucture. 

We don't use a webpack file per environment, we prefer to separate all the tasks per feature and inside each task do the different configurations.

## Webpack example
```
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, envs) => {
    if (!envs) { 
        return;
    }

    const defaultConfig = new UglifyJSPlugin({
      uglifyOptions: {
        keep_classnames: true,
        keep_fnames: true,
      }
    });

    const plugin = {
        [envs.production]: defaultConfig
    };

    return plugin[env];
};
```

## Gulpfile
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

## Tasks configuration
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

