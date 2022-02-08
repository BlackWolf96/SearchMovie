const express = require('express')
const mysql = require('mysql')
const {Validator, DetailedValue} = require("node-data-validator");

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
  res.setHeader('Access-Control-Allow-Origin', '*'); // Change ADDR 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, CREATE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Security-Policy', "default-src 'self'")
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  next()
})

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// TEST TABLE
const test_data = Array(
  { 'actress': 'Hugh Jackman', 'movie': 'Van Helsing', 'poster': 'https://m.media-amazon.com/images/I/71DHEagosIL._AC_SY679_.jpg' },
  { 'actress': 'Kate Beckinsale', 'movie': 'Van Helsing', 'poster': 'https://m.media-amazon.com/images/I/71DHEagosIL._AC_SY679_.jpg' },
  { 'actress': 'Sean Connery', 'movie': 'Liga niezwykłych dżentelmenów', 'poster': 'https://i1.fdbimg.pl/x1/gn5zz9/900x1337_kd381d.jpg' },
  { 'actress': 'Stuart Townsend', 'movie': 'Liga niezwykłych dżentelmenów', 'poster': 'https://i1.fdbimg.pl/x1/gn5zz9/900x1337_kd381d.jpg' }
)

connection.query(`CREATE TABLE IF NOT EXISTS test (
    id INT AUTO_INCREMENT PRIMARY KEY,
    actress_name VARCHAR( 255 ) NOT NULL, 
    movie_name VARCHAR( 120 ) NOT NULL, 
    movie_poster VARCHAR( 200 ) NOT NULL 
  ) engine=INNODB
  `);
connection.query(`CREATE TABLE IF NOT EXISTS contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR( 60 ) NOT NULL, 
  message TEXT NOT NULL
) engine=INNODB
`);
connection.query('SELECT * from test', (error, results, fields) => {
  if( results.length < 1){
    test_data.forEach((item) => {
      connection.query(`INSERT INTO test (actress_name,movie_name,movie_poster) VALUES('${item.actress}', '${item.movie}', '${item.poster}')`)
    })
  }
})
// END TEST TABLE

// Validation models
const search_model = {
  search: new DetailedValue(String, {required: true, min: 6})
}
const contact_model = {
  email: new DetailedValue(String, {required: true, isEmail:true, min: 5} ),
  message: String
}
// END Validation models

myapp.post('/search-post', (req, res) => {
  if(Validator(req.body, search_model)){
    connection.query(`SELECT * from test WHERE actress_name='${req.body.search}'`, (error, results, fields) => {
      if(error) throw error;
      res.send(results) // Send correct msg
    })
  }else{
    res.send('null')
  }
  
});
myapp.post('/contact', (req, res) => {
  console.log(Validator(req.body, contact_model))
  if(Validator(req.body, contact_model)){
    connection.query(`INSERT INTO contact (email, message) VALUES('${req.body.email}','${req.body.message}')`, (error, results, fields) => {
      if(error) throw error;
      res.send(results) // Send correct add 
    })
  }
  else{
    res.send('null')
  }
})
myapp.listen(port, () => {
  console.log(`Server is runing! Port: ${port}`)
})