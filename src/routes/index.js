module.exports = {
  '/health': require('./endpoints/health-route'),
  '/users/create': require('./endpoints/users-create-route'),
  '/users/auth': require('./endpoints/users-auth-route'),
  '/me': require('./endpoints/me-route'),
}