const express = require('express')
const brandController = require('../controllers/brandController')
const router = express.Router()
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), brandController.create)
router.delete('/', checkRoleMiddleware('ADMIN'), brandController.remove)
router.get('/', brandController.getAll)

module.exports = router