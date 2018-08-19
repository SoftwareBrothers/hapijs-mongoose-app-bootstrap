const mongoose = require('mongoose')
const Bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const Boom = require('boom')
 
const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true
  },
  auth: {
    password: String
  }
})

UserSchema.statics.authenticate = async function({email, password}) {
  const user = await this.findOne({email: email})
  const invalid = !user || !await Bcrypt.compare(password, user.auth && user.auth.password)
  if (invalid) {
    throw Boom.forbidden('Email and|or password doesn\'t match')
  }
  return user
}

UserSchema.statics.signUp = async function({email, password}) {
  let user = await this.findOne({email})
  if (user) {
    throw Boom.conflict('User already exists')
  }
  const encryptedPassword = await Bcrypt.hash(password, 10)
  return await new this({
    email,
    auth: {password: encryptedPassword}
  }).save()
}

const User = mongoose.model('User', UserSchema)

module.exports = User