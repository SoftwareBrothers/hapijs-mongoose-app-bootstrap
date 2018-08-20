/**
 * @fileOverview JWT Auth configuration for hapi server
 */

const User = require('../src/models/user-model')
const secret = process.env.JWT_SECRET
const JWT = require('jsonwebtoken')

const validate = async (decoded, request) => {
  const credentials = await User.findById(decoded.userId)
  const isValid = !!credentials
  request.currentUser = credentials
  return {isValid, undefined, request}
}

module.exports.register = async (server) => {
  await server.register(require('hapi-auth-jwt2'))

  server.auth.strategy('token', 'jwt', {
    key: secret,
    validate: validate,
    verifyOptions: { algorithms: [ 'HS256' ] }
  })
  server.auth.default('token')
}

module.exports.createToken = (user) => {
  return JWT.sign({userId: user._id}, secret, { algorithm: 'HS256'})
}