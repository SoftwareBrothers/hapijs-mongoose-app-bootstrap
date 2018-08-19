module.exports = {
  path: '/health', method: 'GET',
  options: {auth: false},
  handler: function() {
    return {
      alive: true
    }
  }
}