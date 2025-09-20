const express = require('express')
const typeController = require('../controllers/typeController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const router = express.Router()

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create)
router.delete('/', checkRoleMiddleware('ADMIN'), typeController.remove)
router.get('/', typeController.getAll)

module.exports = router