process.env.NODE_ENV = 'test'
process.env.MONGO_URL = 'mongodb://mongo/hapi-server-test'

const chai = require('chai')
chai.use(require('sinon-chai'))
global.expect = chai.expect
global.sinon = require('sinon')

const database = require('../config/database')
const models = require('require-all')({
  dirname: __dirname + '/../src/models', recursive: false
})

global.server = require('../config/server')

before(async () => {
  await database.connect()
})

beforeEach(async () => {
  global.sandbox = global.sinon.createSandbox()
})

afterEach(async () => {
  global.sandbox.restore()
  for(let model in models) {
    await models[model].remove({})
  }
})

after(async () => {
  await database.mongoose.connection.close()
})
