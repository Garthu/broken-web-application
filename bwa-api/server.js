require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
    exposedHeaders: ['Content-Disposition']
}

app.use(cors(corsOptions))

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bwa." })
})

require('./app/routes/routes')(app)

const PORT = process.env.NODE_DOCKER_PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})