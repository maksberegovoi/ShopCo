const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class typeController {
  async create(req, res) {
    const {name} = req.body;
    const type = await Type.create({name})
    return res.json(type)
  }

  async remove(req, res, next) {
    try {
      const {id} = req.body;
      const type = await Type.findOne({where: {id}});
      if (!type) {
        return next(ApiError.badRequest('Type has not found'))
      }
      await type.destroy()
      return res.json({message: 'Type was successfully removed'})

    } catch (e) {
      next(ApiError.intenral(e.message))
    }
  }

  async getAll(req, res) {
    const types = await Type.findAll()
    return res.json(types)
  }
}

module.exports = new typeController()