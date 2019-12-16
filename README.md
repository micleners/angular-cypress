# Testing Angular in Cypress with TypeScript

Does not come with typescript ready. Some options:

https://github.com/bahmutov/add-typescript-to-cypress
https://github.com/basarat/typescript-book/blob/master/docs/testing/cypress.md

# Cypress Setup

Using Angular CLI, it is slick and easy to start a new Angular project with the `ng new` command. To install the latest version of of Angular CLI, run the following command. This will install Angular CLI globally onto your system. If you don't have NPM installed, [download and install nodejs](https://nodejs.org/en/download/).

```
npm install -g @angular/cli
```

You can call you're project whatever you want, but I'll be using `angular-cypress` for this tutorial. Run the following command to create your new project:

```
ng new angular-cypress
```

You'll see the creation of a bunch of files and directories and then _hooray_ - we have our new project. Change into this directory with the command:

```
cd angular-cypress
```

Now we want to install the necessary components for cypress and running TypeScript tests in Cypress with this command:

```
npm install cypress webpack @cypress/webpack-preprocessor typescript ts-loader
```

This will have created

Run Cypress to create test directory

Add `tsconfig.json`

```
{
  "compilerOptions": {
    "strict": true,
    "sourceMap": true,
    "module": "commonjs",
    "target": "es5",
    "lib": ["dom", "es6"],
    "types": ["cypress"],
    "jsx": "react",
    "experimentalDecorators": true
  },
  "include": [
    "**/*.ts"
  ],
  "compileOnSave": false
}
```

Go to `cypress/plugins/index.js` and change `index.js`:

```
const wp = require("@cypress/webpack-preprocessor");
module.exports = on => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: { transpileOnly: true }
          }
        ]
      }
    }
  };
  on("file:preprocessor", wp(options));
};
```

Then you can create TypeScript tests around our application:

