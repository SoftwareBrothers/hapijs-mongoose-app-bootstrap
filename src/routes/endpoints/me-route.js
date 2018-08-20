const Joi = require('joi')
const meController = require('../../controllers/me-controller')
const userSchema = require('../schemas/user')
const authHeaderValidator = require('../helpers/auth-header-validator')

module.exports = {
  path: '/me',
  method: 'GET',
  handler: meController.me,
  options: {
    description: 'Fetches data from currently logged in user',
    tags: ['api'],
    validate: {
      headers: Joi.object({...authHeaderValidator}).options({ allowUnknown: true })
    },
    plugins: {
      'hapi-swagger': {
        responses: {
          200: {
            description: 'Success',
            schema: userSchema
          }
        },
        payloadType: 'form'
      }
    }
  }
}