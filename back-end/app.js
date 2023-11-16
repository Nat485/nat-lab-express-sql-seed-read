const express = require('express')
const app = express()
const songController = require('./controllers/songController')

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/colors", colorsController)


app.get('/', (req, res) => {
    res.send('Welcome to Colors App!')

})

module.exports = app


