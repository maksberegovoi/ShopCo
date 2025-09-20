const express = require('express')
const categoryController = require(
  '../controllers/categoryController')
const router = express.Router()
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.get('/', checkRoleMiddleware('ADMIN'), categoryController.getCategory)
router.post('/', checkRoleMiddleware('ADMIN'), categoryController.createCategory)
router.delete('/', checkRoleMiddleware('ADMIN'), categoryController.removeCategory)
router.put('/', checkRoleMiddleware('ADMIN'),  categoryController.removeFromCategory)
router.put('/', checkRoleMiddleware('ADMIN'),  categoryController.addToCategory)

module.exports = router