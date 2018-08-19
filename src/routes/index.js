module.exports = {
  '/health': require('./health-route'),
  '/me': require('./me-route'),
  '/users/auth': require('./users-auth-route'),
  '/users/create': require('./users-create-route')
}