# hapijs-mongoose-app-bootstrap

## What is this app about?

This is a base application for running new projects using HAPI framework and mongoose as the persistent data store.

The app has following features:

- dockerized environment,
- automated tests using mocha, chai and sinon,
- measured test coverage,
- database configuration,
- eslint linter configuration,
- API documentation generator using swagger,
- documentation generator using jsdoc,
- authentication routes and auth logic with JWT

Using this repo as a start for new app should save you couple of days of development.

## Files to create

**.env**
Application uses `infrastructure/.env` file to hold all environmental variables. First thing before starting should be to create it. You can use example `infrastructure/.env-example` file as a base for it.

## How to run the application

App is dockerized so you have to have both docker and docker-compose installed in order to run it.

running the app:
```
cd infrastructure
docker-compose up
```

After running it you can 'enter' the application container by running:

```
# within the infrastructure directory
docker-compose exec app bash
```

Than you can simply run any command you like.

Application runs under port 8080 so after up'ing the docker-compose visit `localhost:8080/health` to see healthcheck from the api.

## Folders structure

Application contains following folders:

- ./config - all server configuration files.
- ./infrastructure - files related to docker and docker-compose
- ./spec - test files
- ./spec/index.js - test suite configuration
- ./spec/controllers - tests for controllers
- ./spec/models - tests for models
- ./src - source code for the application
- ./src/controllers - controllers
- ./src/models - mongoose models with schemas
- ./src/routes - api routes
- ./tutorials - standalone tutorial files used by jsdoc

## Automated tests with coverage

As mentioned above application uses mocha along with chai.expect syntax. All tests are placed within `./spec` subdirectory. Under `./spec/index.js` you can find all the configuration for the test suit and under `./mocha.opts` options for mocha runner.

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

MongoDB container is configured under `./infrastructure/docker-compose.yml`. All data from the container is linked with `/infrastructure/data` folder.

Simple configuration file for the database can be found here: `./config/database.js`

## Linter

Project has eslint configuration file under `./eslintrc.js`. To run linter against all the files you can use dedicated npm command:

```
# within the container
npm run lint
```

## Swagger API docs

To turn on swagger api documentation make sure `SWAGGER` env variable is set to `true` in `./infrastructure/.env` file

After running the app generated documentation is available under `http://localhost:8080/documentation`. To document new routes take a look hapi-swagger pacakge: https://github.com/glennjones/hapi-swagger or check any existing routes.

## JSDoc

Project allows you to generate documentation based on inline comments using JSDoc. In order to generate it run:

```
npm run docs
```

within the app container.

It will create and populate `./docs` folder with documentation files.
Also if you set `JSDOC` env to `true` entire documentation will be served by the app and available under `http://localhost:8080/code`

## Clients

Wonder how to connect with the API from the frontend app? There is a simple client application written in ReactNative. Take a look at it here: https://github.com/SoftwareBrothers/react-native-hapijs-client

## License

hapijs-mongoose-app-bootstrap is Copyright © 2018 SoftwareBrothers.co. It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE) file.

## About SoftwareBrothers.co

<img src="https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg" width=240>


We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available to [hire](https://softwarebrothers.co/contact).
* If you want to work for us - checkout the [career page](https://softwarebrothers.co/career).
