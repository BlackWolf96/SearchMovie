const express = require('express')
const mysql = require('mysql')

const myapp = express()
const port = 3001

myapp.get('/', (req, res) => {
  res.send('Hello')
})
myapp.get('/about', (req, res) => {
  res.send('this is about')
})

myapp.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})