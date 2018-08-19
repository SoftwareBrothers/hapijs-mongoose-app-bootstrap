const Hapi = require('hapi')
const auth = require('./auth')
const swagger = require('./swagger')

const routes = require('../src/routes')

const server = Hapi.server({
  port: process.env.PORT
})

auth.register(server)
swagger.register(server)

for (var route in routes) {
  server.route(routes[route])
}

module.exports = server