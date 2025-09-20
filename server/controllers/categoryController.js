const {ProductsCategory} = require('../models/models')
const ApiError = require("../error/ApiError");

class CategoryController {

  async createCategory(req, res, next) {
    try {
      const {name} = req.body;

      const category = await ProductsCategory.create({
        name: name,
        productIds: []
      })

      return res.json(category)

    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async removeCategory(req, res, next) {
    try {
      const {name} = req.body;
      const category = ProductsCategory.findOne({where: {name}})
      if (!category) {
        return next(ApiError.notFound(`Category ${name} has not found`))
      }
      const result = await ProductsCategory.destroy({
        where: {
          name: name
        }
      });

      if (result === 0) {
        return next(ApiError.badRequest('removing category: result length = 0'))
      }
      return res.json({
        message: `Category ${name} was successfully removed: result - ${result}`,
        count: result
      });
    } catch (e) {
      next(ApiError.internal(e.message))
    }
  }

  async addToCategory(req, res, next) {
    try {
      const {name} = req.params;
      const {productIds} = req.body;

      const category = ProductsCategory.findOne({where: {name}})
      if (!category) {
        return next(ApiError.notFound(`Category ${name} has not found`))
      }
      if (!Array.isArray(productIds)) {
        return next(ApiError.badRequest('Invalid data format'))
      }
      const validProductIds = productIds.filter(id =>
        Number.isInteger(id) && id > 0
      );
      if (validProductIds.length === 0) {
        return next(ApiError.badRequest('Invalid data values'));
      }

      const currentCategoryIds = category.productIds || [];
      const updatedCategoryIds = [...new Set([...currentCategoryIds, ...validProductIds])]

      await category.update({
        productIds: updatedCategoryIds
      })

      return res.json(updatedCategoryIds)

    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async removeFromCategory(req, res, next) {
    try {
      const {name} = req.params;
      const {productIds} = req.body;

      const category = ProductsCategory.findOne({where: {name}})
      if (!category) {
        return next(ApiError.notFound(`Category ${name} has not found`))
      }
      if (!Array.isArray(productIds)) {
        return next(ApiError.badRequest('Invalid data format'))
      }
      const validProductIds = productIds.filter(id =>
        Number.isInteger(id) && id > 0
      );
      if (validProductIds.length === 0) {
        return next(ApiError.badRequest('Invalid data values'));
      }

      const currentCategoryList = category.productIds || [];
      const updatedCategoryList = currentCategoryList.filter(id => !productIds.includes(id))

      await category.update({
        productIds: updatedCategoryList
      })

      return res.json(updatedCategoryList)

    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getCategory(req, res, next) {
    const {name} = req.body
    const category = await ProductsCategory.findOne({
      where: {name}
    })
    if (!category) {
      return next(ApiError.notFound(`Category ${name} has not found`))
    }
    return res.json(category)
  }
}



module.exports = new CategoryController()