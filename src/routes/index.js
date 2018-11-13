const health = require('./endpoints/health-route')
const usersCreate = require('./endpoints/users-create-route')
const usersAuth = require('./endpoints/users-auth-route')
const me = require('./endpoints/me-route')

module.exports = {
  '/health': health,
  '/users/create': usersCreate,
  '/users/auth': usersAuth,
  '/me': me,
}
