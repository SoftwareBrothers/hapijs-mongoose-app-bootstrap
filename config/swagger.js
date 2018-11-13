/**
 * @fileOverview Swagger documentation configuration
 */

const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')
const Pack = require('../package')

module.exports.register = async (server) => {
  const swaggerOptions = {
    info: {
      title: 'API Documentation',
      version: Pack.version,
    },
  }

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ])
}
