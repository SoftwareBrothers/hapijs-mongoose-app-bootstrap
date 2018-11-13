/**
 * @fileOverview JWT Auth configuration for hapi server
 */

const JWT = require('jsonwebtoken')
const authJWT = require('hapi-auth-jwt2')
const User = require('../src/models/user-model')

const secret = process.env.JWT_SECRET

const validate = async (decoded, request) => {
  const credentials = await User.findById(decoded.userId)
  const isValid = !!credentials
  request.currentUser = credentials
  return { isValid, undefined, request }
}

module.exports.register = async (server) => {
  await server.register(authJWT)

  server.auth.strategy('token', 'jwt', {
    key: secret,
    validate,
    verifyOptions: { algorithms: ['HS256'] },
  })
  server.auth.default('token')
}

module.exports.createToken = user => JWT.sign({ userId: user._id }, secret, { algorithm: 'HS256' })
