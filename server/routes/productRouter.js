const express = require('express')
const productController = require(
  '../controllers/productController')
const router = express.Router()
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), productController.create)
router.delete('/', checkRoleMiddleware('ADMIN'), productController.remove)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)

module.exports = router