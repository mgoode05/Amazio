require('./config/database');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index'))
})

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`running on port: ${port}`)
})