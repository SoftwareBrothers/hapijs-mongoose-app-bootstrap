const Joi = require('joi')

module.exports = Joi.object({
  statusCode: Joi.number().example(403),
  error: Joi.string().example('Forbidden'),
  message: Joi.string().example('Email and|or password doesn\'t match'),
})
