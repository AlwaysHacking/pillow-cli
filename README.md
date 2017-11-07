# pillow-cli

🛌🏻 A CLI tool for booting modernized AngularJS projects.

(Inspired by [vue-cli](https://github.com/vuejs/vue-cli) and [Create React App](https://github.com/facebookincubator/create-react-app), special thanks to [Babel](https://babeljs.io/) and [Webpack](https://webpack.js.org/))

## Quick Overview

```sh
npm install -g pillow-cli
pillow my-app
cd my-app
npm install
npm start
```

<img src='https://user-images.githubusercontent.com/11406106/32485753-1e22d79e-c36a-11e7-8ac1-243bb0afa11e.jpg' width='600' alt='npm start'>

Then open http://localhost:3000/ to see your app.
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## Getting Started

### Installation

Install it once globally:

```sh
npm install -g pillow-cli
```

**You’ll need to have Node >= 6 on your machine**. You can use [nvm](https://github.com/creationix/nvm#installation) to easily switch Node versions between different projects.

### Creating an App

To create a new app, run:

```sh
pillow my-app
cd my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure:

```
my-app
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # project config
│   └── ...
├── src/
│   ├── app.js                  # app entry file
│   ├── app.routes.js           # app route
│   ├── main/                   # main module
│   │   ├── components          # main module ui components
│   │   ├── services            # main module services
│   │   ├── views               # main module page views
│   │   ├── index.js            # main module entry file
│   │   └── main.routes.js      # main module route(If use router)
│   └── modules/                # location for other modules
│       └── ...
├── static/                     # pure static assets (directly copied)
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
├── .editorconfig               # editor config
├── index.template.html         # index.html template
└── package.json                # build scripts and dependencies
```
Before you start, you need install dependencies by running:

```sh
npm install
```

Once the installation is done, you can run some commands inside the project folder:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console and browser.

<img src='https://user-images.githubusercontent.com/11406106/32486324-efd77c58-c36b-11e7-9902-eee6311e8052.jpg' width='600' alt='code error'>

### `npm run build` or `yarn build`

<img src='https://user-images.githubusercontent.com/11406106/32485987-e72ea1cc-c36a-11e7-9f3f-887c7e4736cd.jpg' width='600' alt='npm run build'>

Builds the app for production to the `dist` folder.<br>
It correctly bundles AngularJS in production mode and optimizes the build for the best performance.

Your app is ready to be deployed.
