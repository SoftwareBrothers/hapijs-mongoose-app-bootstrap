const meController = require('../controllers/me-controller')

module.exports = {
  path: '/me', method: 'GET',
  handler: meController.me,
}