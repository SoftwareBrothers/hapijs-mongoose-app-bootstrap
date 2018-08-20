const Joi = require('joi')

module.exports = Joi.object({
  email: Joi.string().email()
    .description('users email. Will be stripped and lowercased'),
  password: Joi.string().min(6).max(30)
    .description('password. Minimum 6 characters, maximum 30')
})