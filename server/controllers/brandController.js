const {Brand} = require("../models/models");
const ApiError = require("../error/ApiError");

class brandController {
  async create(req, res) {
    const {name} = req.body;
    const brand = await Brand.create({name})
    return res.json(brand)
  }

  async remove(req, res, next) {
    try {
      const {id} = req.body;
      const brand = await Brand.findOne({where: {id}});
      if (!brand) {
        return next(ApiError.badRequest('Brand has not found'))
      }
      await brand.destroy()
      return res.json({message: 'Brand was successfully removed'})

    } catch (e) {
      next(ApiError.intenral(e.message))
    }
  }

  async getAll(req, res) {
    const brands = await Brand.findAll()
    return res.json(brands)
  }
}

module.exports = new brandController()