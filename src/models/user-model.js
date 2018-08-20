/**
 * @module models
 */

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

/**
 * Returns user based on her email and password. If user is not found or 
 * password does not mach it throws error.
 * 
 * @memberof module:models~User
 * 
 * @param  {String} options.email
 * @param  {String} options.password
 * @return {User}
 */
UserSchema.statics.authenticate = async function({email, password}) {
  const user = await this.findOne({email: email})
  const invalid = !user || !await Bcrypt.compare(password, user.auth && user.auth.password)
  if (invalid) {
    throw Boom.forbidden('Email and|or password doesn\'t match')
  }
  return user
}

/**
 * Creates user based on her email and password. If user of a given email]
 * already exists it throws an error.
 * 
 * @memberof module:models~User
 * 
 * @param  {String} options.email
 * @param  {String} options.password
 * @return {User}
 */
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

/**
 * Mongoose model for the users collection.
 * 
 * @constructor
 */
const User = mongoose.model('User', UserSchema)

module.exports = User