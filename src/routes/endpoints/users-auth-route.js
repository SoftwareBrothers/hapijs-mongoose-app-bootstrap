const usersController = require('../../controllers/users-controller')
const userAuthSchema = require('../schemas/user-auth')
const tokenSchema = require('../schemas/token')
const errorForbidden = require('../schemas/error-forbidden')
const errorBadRequestSchema = require('../schemas/error-bad-request')

module.exports = {
  path: '/users/auth', method: 'POST',
  handler: usersController.auth,
  options: {
    auth: false,
    description: 'Logs existing user to the application',
    tags: ['api'],
    validate: {
      payload: userAuthSchema
    },
    plugins: {
      'hapi-swagger': {
        responses: {
          200: {
            description: 'Success',
            schema: tokenSchema
          },
          403: {
            description: 'Forbidden',
            schema: errorForbidden
          },
          400: {
            description: 'Bad Request',
            schema: errorBadRequestSchema
          }
        },
        payloadType: 'form'
      }
    },
  }
}