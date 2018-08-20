module.exports.register = async (server) => {
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