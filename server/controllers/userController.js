const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')

const generateJwtToken = (id, email, role) => {
  return jwt.sign(
    {id, email, role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

class userController {

  async registration(req, res, next) {
    const {email, password, role} = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Invalid password or email'));
    }

    const isUser = await User.findOne({where: {email}})
    if (isUser) {
      return next(ApiError.badRequest('User has already exist'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create(
      {email, password: hashPassword, role}
    )
    const userBasket = await Basket.create({userId: user.id})
    const token = generateJwtToken(
      user.id,
      user.email,
      user.role
    )

    return res.json({token})
  }

  async login(req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.badRequest("User does not  exist"));
    }

    let comparePasswords = bcrypt.compareSync(
      password, user.password)
    if (!comparePasswords) {
      return next(ApiError.badRequest('Invalid password'));
    }

    const token = generateJwtToken(user.id, user.email, user.role)
    return res.json({token})
  }

  async check(req, res, next) {
    const token = generateJwtToken(req.user.id, req.user.email, req.user.role)
    return res.json({token})
  }
}

module.exports = new userController()