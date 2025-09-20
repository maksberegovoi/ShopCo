require('dotenv').config()
const express = require('express');
const fileUpload = require('express-fileupload')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require(
  './middleware/ErrorHandlingMiddleware')

const app = express()
const path = require('path')

app.use(cors());
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)

app.get('/', (req, res) => {
  res.status(200).json({message: 'WORKING!!!!'})
})
const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(
      PORT,
      () => console.log(`сервер работает на порте ${PORT}`)
    )
  } catch (e) {
    console.log(e)
  }
}


start()

