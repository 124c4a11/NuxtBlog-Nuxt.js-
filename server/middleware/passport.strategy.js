const { Strategy, ExtractJwt } = require('passport-jwt')
const { model } = require('mongoose')
const keys = require('../keys')

const User = model('users')

const options = {
  // Auterization: Bearer <token>
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.JWT
}


module.exports = new Strategy(options, async (payload, done) => {
  try {
    const user = await User.findById(payload.userId).select('id')

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  } catch (err) {
    console.error(e)
  }
})
