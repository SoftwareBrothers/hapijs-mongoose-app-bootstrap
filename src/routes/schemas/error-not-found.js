const Joi = require('joi')

module.exports = Joi.object({
  statusCode: Joi.number().example(404),
  error: Joi.string().example('Not Found'),
  message: Joi.string().example('Not Found')
})