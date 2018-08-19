const User = require('../models/user-model')

module.exports = {
  me: async (request) => {
    const user = await User.findById(request.currentUser._id)
    return {
      _id: user._id,
      email: user.email
    }
  }
}
