const express = require('express')

const router = express.Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const categoryRouter = require('./categoryRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/category', categoryRouter)

module.exports = router