const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
const {v4: uuidv4} = require('uuid')
const path = require('path')

class ProductController {

  async setDiscount(req, res, next) {
    console.log('123')
  }

  async create(req, res, next) {
    try {
      let {name, price, description, brandId, typeId, info} = req.body;
      const {img} = req.files;
      let fileName = uuidv4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const product = await Product.create({
        name,
        price,
        description,
        brandId,
        typeId,
        img: fileName
      })

      if (info) {
        info = JSON.parse(info)
        info.forEach(i => {
          ProductInfo.create(
            {
              title: i.title,
              description: i.description,
              productId: product.id
            }
          )
        })

      }

      return res.json(product)

    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async remove(req, res, next) {
    try {
      const {ids} = req.body;
      if (!Array.isArray(ids) || ids.length === 0) {
        return next(ApiError.badRequest('Invalid or empty array of products' +
          ' IDs'))
      }
      const result = await Product.destroy({
        where: {
          id: ids
        }
      });

      if (result === 0) {
        return next(ApiError.badRequest('No products found for deletion'))
      }
      return res.json({
        message: `Successfully removed ${result} products`,
        count: result
      });
    } catch (e) {
      next(ApiError.internal(e.message))
    }
  }

  async getAll(req, res) {
    let {brandId, typeId, limit, page} = req.query
    page = page || 1
    limit = limit || 6
    let offset = page * limit - limit
    let products
    if (brandId && typeId) {
      products = await Product.findAndCountAll(
        {where: {brandId, typeId}, limit, offset})
    }
    if (!brandId && !typeId) {
      products = await Product.findAndCountAll({limit, offset})
    }
    if (!brandId && typeId) {
      products = await Product.findAndCountAll(
        {where: {typeId}, limit, offset})
    }
    if (brandId && !typeId) {
      products = await Product.findAndCountAll(
        {where: {brandId}, limit, offset})
    }

    return res.json(products)
  }

  async getOne(req, res, next) {
    const {id} = req.params
    const product = await Product.findOne({
      where: {id}
    })

    if (!product) {
      return next(ApiError.badRequest('Product has not found'))
    }

    return res.json(product)

  }

}

module.exports = new ProductController()