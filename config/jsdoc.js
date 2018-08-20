/**
 * @fileOverview cofiguratin for /code route serving jsdoc documentation
 */

require('inert')

module.exports.register = async (server) => {
  await server.register(require('inert'))

  const route = {
    path: '/code/{param*}', method: 'GET',
    options: {
      auth: false,
    },
    handler: {
      directory: {path: 'docs'}
    }
  }
  server.route(route)
}