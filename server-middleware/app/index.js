const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host    : process.env.host,
  user    : process.env.user,
  password: process.env.password,
  database: process.env.database
})

const myapp = express()
const port = 3001

connection.connect();

myapp.get('/', (req, res) => {
  res.send('Hello')
})
myapp.get('/about', (req, res) => {
  res.send('this is about')
})

myapp.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})