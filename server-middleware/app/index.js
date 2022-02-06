const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host    : process.env.host,
  user    : process.env.user,
  password: process.env.password,
  database: process.env.database
})

console.error( process.env.host )
console.error( process.env.user )
console.error( process.env.password )
console.error( process.env.database )
const myapp = express()
const port = 3001

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

myapp.get('/', (req, res) => {
  res.send('Hello')
})
myapp.get('/about', (req, res) => {
  res.send('this is about')
})

myapp.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})