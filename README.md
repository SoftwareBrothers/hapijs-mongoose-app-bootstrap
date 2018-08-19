# hapijs-mongoose-app-bootstrap

## Whats the app is about

This is a base application for running new projects in SoftwareBrothers using HAPI framework and mongoose as the persistent data store.

The app has following features:

- dockerized environment
- automated tests using mocha, chai and sinon
- measurement test coverage
- database configured
- linter configured (eslint)
- API documentation generator using swagger
- inline documnetation generator using jsdoc
- authentication routes using JWT

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

