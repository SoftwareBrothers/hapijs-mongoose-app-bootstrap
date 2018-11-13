const User = require('../models/user-model')
const auth = require('../../config/auth')

module.exports = {
  create: async ({ payload: { email, password } }) => {
    const user = await User.signUp({
      email,
      password,
    })
    return {
      token: auth.createToken(user),
    }
  },

  auth: async ({ payload: { email, password } }) => {
    const user = await User.authenticate({ email, password })
    return {
      token: auth.createToken(user),
    }
  },
}
