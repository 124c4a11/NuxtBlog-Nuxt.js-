const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('../keys')

const User = require('../models/user.model')

module.exports.login = async (req, res) => {
  const user = await User.findOne({ login: req.body.login })

  if (user) {
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)

    if (isPasswordCorrect) {
      const token = jwt.sign({
        login: user.login,
        userId: user._id
      }, keys.JWT, { expiresIn: 60 * 60 })

      res.json({ token })
    } else {
      res.status(404).json({ message: 'User not found!' })
    }
  } else {
    res.status(404).json({ message: 'User not found!' })
  }
}

module.exports.createUser = (req, res) => {

}
