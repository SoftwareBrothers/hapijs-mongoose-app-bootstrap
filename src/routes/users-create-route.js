const Joi = require('joi')
const usersController = require('../controllers/users-controller')

module.exports = {
  path: '/users',
  method: 'POST',
  handler: usersController.create,
  options: {auth: false, validate: {payload: {
    email: Joi.string().min(2).description('email of the new user'),
    password: Joi.string().min(6).description('password'),
    workspaceName: Joi.string().min(2).description('workspace name')
  }}}
}