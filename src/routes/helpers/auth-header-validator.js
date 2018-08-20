const Joi = require('joi')

module.exports = {
  authorization: Joi
    .string()
    .regex(/^Bearer\s/)
    .description('Bearer JWT')
    .example('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjcxM2I3ZGRkYzZhMjA0YTJmNjhkMDIiLCJpYXQiOjE1MzQxNDc1NDF9.jgDoScbs7qHDLPiYBsqxx1K93QTQE-pkXC2vkzbzcwU')
}
