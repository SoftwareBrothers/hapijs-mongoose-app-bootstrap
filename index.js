const server  = require('./config/server')

const start = async () => {
  try {
    await server.start()
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }
  console.log('Server running at:', server.info.uri)
}

start()