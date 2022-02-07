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
myapp.use(express.json());
myapp.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
})
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
myapp.post('/search-post', (req, res) => {
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