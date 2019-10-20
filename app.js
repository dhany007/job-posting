require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`\nServer listening on port ${port}`)
})

module.exports = app