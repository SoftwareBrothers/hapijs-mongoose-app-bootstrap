const Hapi = require('hapi')
const auth = require('./auth')
const swagger = require('./swagger')
const Boom = require('boom')

const routes = require('../src/routes')

const server = Hapi.server({
  port: process.env.PORT,
  routes: {
    validate: {
      failAction: async (req, response, err) => {
        throw Boom.badRequest(err.message)
      }
    }
  }
})

auth.register(server)
if (process.env.SWAGGER === 'true') {
  swagger.register(server)
}

for (var route in routes) {
  server.route(routes[route])
}

module.exports = server