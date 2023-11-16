const express = require('express')
const app = express()
const songController = require('./controllers/songController.js')

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/songs", songController)


app.get('/', (req, res) => {
    res.send('Welcome to the tuner App!')

})

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

module.exports = app


