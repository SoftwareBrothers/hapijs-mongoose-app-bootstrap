const Joi = require('joi')

module.exports = Joi.object({
  statusCode: Joi.number().example('XXX'),
  error: Joi.string().example('Error name'),
  message: Joi.string().example('Error description'),
})
