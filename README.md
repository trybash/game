# try-bash

[![Build Status](https://travis-ci.org/trybash/game.svg?branch=master)](https://travis-ci.org/trybash/game)


> Learn Bash the Easy Way

This is the source code for the browser-based TryBash game.

[Have a look at the homepage](https://trybash.github.io/) to learn more about bash.

For offline usage you can [download a copy of the game](https://github.com/trybash/game/archive/gh-pages.zip).


## Overview

The whole game is a web-app running on a single page.

We use [vue.js](http://vuejs.org/) to structure the application and the setup is based on the [vue webpack template](https://vuejs-templates.github.io/webpack/).

For the terminal we created a standalone [bash emulator](https://trybash.github.io/bash-emulator/) in plain Javascript as a separate project.


## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit
# or keep tests running
npm run unit:watch

# run e2e tests
npm run e2e

# run tests and lint
npm test

# lint javascript
npm run lint

# publish the latest version to gh-pages
scripts/deploy.sh
```


## LICENSE

[MIT](/LICENSE)

