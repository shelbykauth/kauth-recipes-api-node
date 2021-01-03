# node-js-getting-started

## Tech Stack:

- [Typescript](https://www.typescriptlang.org/) ([npm](https://www.npmjs.com/package/typescript), use tsc)
- [Express](https://expressjs.com/) ([npm](https://www.npmjs.com/package/express))
- [Sequelize](https://sequelize.org/) ([npm](https://www.npmjs.com/package/sequelize))
- [Postgres](https://www.postgresql.org/)
- [Heroku](https://www.heroku.com/home)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.
Must be logged into Heroku

```sh
$ git clone https://github.com/shelbykauth/kauth-recipes-api-node.git # or clone your own fork
$ cd kauth-recipes-api-node
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deployment Setup

checkout the Getting Started stuff. `heroku git:remote -a <project name>` will allow you to associate this with an existing project.

## Before you deploy

Before deciding to push:

```
npm run heroku-postbuild
heroku local web
```

This should allow you to emulate running on heroku

Before push:

```
npm run format # (or format-check)
npm run lint
npm run test
```

## Deploying to Heroku

```
git push heroku main
heroku open
```

Don't forget to push to origin!

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
