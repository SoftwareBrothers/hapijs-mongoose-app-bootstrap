# hapijs-mongoose-app-bootstrap

## What is the app about

This is a base application for running new projects in SoftwareBrothers using HAPI framework and mongoose as the persistent data store.

The app has following features:

- dockerized environment
- automated tests using mocha, chai and sinon
- measured test coverage
- database configuration
- eslint linter configuration
- API documentation generator using swagger
- inline documentation generator using jsdoc
- authentication routes using JWT

Using this repo as a start for new app should save you one day of development.

## Files to create

**.env**
Application uses `infrastructure/.env` file to hold all environmental variables. First thing before starting should be create it. You can use example `.env-example` file as a base for it.

## How to run the application

App is dockerized so you have to have both docker and docker-compose installed in order to run it.

running the app:
```
cd infrastructure
docker-compose up
```

After running it you can 'enter' the application container by running:

```(bash)
# within the infrastructure directory
docker-compose exec app bash
```

Than you can simply run any command you like.

Application runs under port 8080 so after up'ing the docker-compose visit `localhost:8080/health` to see healthcheck from the api.

## Folders structure

Application contains following folder structure:

./config - all server configuration files are there.
./infrastructure - files related to docker, docker-compose
./spec - test files
./spec/index.js - test suite configuration
./spec/controllers - tests for controllers
./spec/models - tests for models
./src - source code for the application
./src/controllers - controllers
./src/models - mongoose models with schemas
./src/routes - api routes
./tutorials - standalone tutorial files used by jsdoc

## Automated tests with coverage

As mentioned above application uses mocha along with chai.expect syntax. All tests are placed within `./spec` subdirectory. Under `./spec/index.js` you can find all the configuration for the test suit and under `./spec/mocha.opts` options for mocha runner.

To run tests:
```
# enter the docker app container
docker-compose exec app bash

# within the container
# simply run automated tests
npm test

# or get coverage report
npm run cover
```

## Database

Application uses mongodb as a persistent data store. ORM is mongoose. 

MongoDB container is configured under `./infrastructure/docker-compose.yml` where
Simple configuration file for the database connection can be found here: `./config/database.js`

## Linter

Project has eslint configuration file under `./eslintrc.js`. To run linter against all the files you can use dedicated npm command:

```
# within the container
npm run lint
```

## Swagger API docs

To turn on swagger api documentation make sure SWAGGER env variable is set to `true` in `./infrastructure/.env` file

Swagger api documentation is available under `http://localhost:8080/documentation`. To document new routes take a look at how to do this: https://github.com/glennjones/hapi-swagger or check any existing routes.

## JSDoc

Project allows you to generate documentation based on inline comments using JSDoc. In order to generate latest version run:

```
npm run docs
```

withing the app container.

It will create and populate `./docs` folder with documentation files.
Also if you set `JSDOC` env to `true` entire documentation will be served from `http://localhost:8080/code`

