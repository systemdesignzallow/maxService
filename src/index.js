require("@babel/polyfill");

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const dbHelper = require('../database/database')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json())

app.get('/agents', (req, res) => {
  dbHelper.getFourRandomAgents(data => {
    res.json(data)
  })
})

module.exports = app;