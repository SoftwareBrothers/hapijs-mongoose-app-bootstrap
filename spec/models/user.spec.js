const User = require('../../src/models/user-model')

describe('User', function() {
  let email = 'w@rst-it.com'
  let password = 'somepassword'

  describe('.signUp', function() {
    it('creates new record', async function() {
      this.user = await User.signUp({email, password})
      const count = await User.countDocuments()
      expect(count).to.equal(1)
    })

    context('user already exists', function() {
      beforeEach(async function() {
        this.user = await User.signUp({email, password})
      })

      it('throws error when signing up again', function(done) {
        User.signUp({email, password}).catch(error => {
          expect(error.output.statusCode).to.equal(409)
          done()
        })
      })

      it('has correct email', function() {
        expect(this.user.email).to.equal(email)
      })

      it('has encrypted password', function() {
        expect(this.user.auth.password).not.to.equal(password)
        expect(this.user.auth.password).not.to.be.undefined
      })
    })
  })
})