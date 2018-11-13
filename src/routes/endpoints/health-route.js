const Joi = require('joi')

const responseModel = Joi.object({
  alive: Joi.boolean(),
})

module.exports = {
  path: '/health',
  method: 'GET',
  options: {
    auth: false,
    description: 'Perform a health check of the server',
    tags: ['api'],
    notes: `Route returns simple json response with one key: alive.
            You can implement more detailed response under
            ./src/routes/health-route.js`,
    plugins: {
      'hapi-swagger': {
        responses: {
          200: {
            description: 'Success',
            schema: responseModel,
          },
        },
        payloadType: 'form',
      },
    },
  },
  handler: function handler() {
    return {
      alive: true,
    }
  },
}
