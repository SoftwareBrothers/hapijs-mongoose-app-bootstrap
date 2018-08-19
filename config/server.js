const Hapi = require('hapi')

const server = Hapi.server({
  port: process.env.PORT
})

module.exports = server