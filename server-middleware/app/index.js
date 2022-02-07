const express = require('express')
const mysql = require('mysql')

const cors = require('cors');
const connection = mysql.createConnection({
  host    : process.env.host,
  user    : process.env.user,
  password: process.env.password,
  database: process.env.database
})

const myapp = express()
const port = 3001
myapp.use(express.json());
myapp.use(cors({origin: true, credentials: true}));
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

myapp.get('/', (req, res) => {
  connection.query('SELECT * from movie', (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify(results))
  });

})
myapp.get('/', (req, res) => {
  res.send('this is about')
})
myapp.post('/search', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})
myapp.get('/about', (req, res) => {
  res.send('this is about')
})
myapp.post('/contact', (req, res) => {
})
myapp.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})