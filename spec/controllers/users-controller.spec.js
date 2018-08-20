const User = require('../../src/models/user-model')
const UsersController = require('../../src/controllers/users-controller')

describe('UsersController', function() {
  let email = 'w@softwarebrothers.io'
  let password = 'password'

  beforeEach(function() {
    sandbox.stub(User, 'signUp').returns({_id: 'userid'})
  })
  describe('#create', function() {
    beforeEach(async function() {
      this.ret = await UsersController.create({
        payload: {email, password}
      })
    })

    it('creates new user', function() {
      expect(User.signUp).to.have.been.calledOnce
    })

    it('returns token', function() {
      expect(this.ret.token).to.be.a('string')
      expect(this.ret.token).to.have.lengthOf.above(40)
    })
  })
})