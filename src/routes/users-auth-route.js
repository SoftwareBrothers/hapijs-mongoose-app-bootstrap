const Joi = require('joi')
const usersController = require('../controllers/users-controller')

module.exports = {
  path: '/users/auth', method: 'POST',
  handler: usersController.auth,
  options: {auth: false, validate: {payload: {
    email: Joi.string().min(1),
    password: Joi.string().min(1)
  }}}
}