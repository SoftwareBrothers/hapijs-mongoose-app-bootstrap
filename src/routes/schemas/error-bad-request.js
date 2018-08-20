const Joi = require('joi')

module.exports = Joi.object({
  statusCode: Joi.number().example(400),
  error: Joi.string().example('Bad Request'),
  message: Joi.string().example('"password" length must be at least 6 characters long')
})