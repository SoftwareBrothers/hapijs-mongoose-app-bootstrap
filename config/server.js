/**
 * @fileOverview Hapi server main configuration file
 */

const Hapi = require('hapi')
const Boom = require('boom')
const auth = require('./auth')
const swagger = require('./swagger')
const jsdoc = require('./jsdoc')

const routes = require('../src/routes')

const server = Hapi.server({
  port: process.env.PORT,
  routes: {
    validate: {
      failAction: async (req, response, err) => {
        throw Boom.badRequest(err.message)
      },
    },
  },
})

auth.register(server)

if (process.env.SWAGGER === 'true') {
  swagger.register(server)
}

if (process.env.JSDOC === 'true') {
  jsdoc.register(server)
}

for (const route in routes) {
  server.route(routes[route])
}

module.exports = server
