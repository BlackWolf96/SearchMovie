const { response } = require('express')
const e = require('express')
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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, CREATE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
})

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// TEST TABLE
const test_data = Array(
  { 'actress': 'Hugh Jackman', 'movie': 'Van Helsing', 'poster': 'Not yet' },
  { 'actress': 'Kate Beckinsale', 'movie': 'Van Helsing', 'poster': 'Not yet' },
  { 'actress': 'Sean Connery', 'movie': 'Liga niezwykłych dżentelmenów', 'poster': 'Not yet' },
  { 'actress': 'Stuart Townsend', 'movie': 'Liga niezwykłych dżentelmenów', 'poster': 'Not yet' }
)

connection.query(`CREATE TABLE IF NOT EXISTS test (
    id INT AUTO_INCREMENT PRIMARY KEY,
    actress_name VARCHAR( 255 ) NOT NULL, 
    movie_name VARCHAR( 120 ) NOT NULL, 
    movie_poster VARCHAR( 200 ) NOT NULL 
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
myapp.get('/', (req, res) => {
  connection.query('SELECT * from movie', (error, results, fields) => {
    console.log( results )
    res.send(JSON.stringify(results))
  });

})
myapp.get('/', (req, res) => {
  res.send('this is about')
})
myapp.post('/search-post', (req, res) => {
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const status = true;

  if(format.test(req.body.search)){
    status = false;
  }

  if( status === true){
    connection.query(`SELECT * from test WHERE actress_name='${req.body.search}'`, (error, results, fields) => {
      if( results.length > 0){
        res.send(result)
      }
      else{
        res.send('Nie znaleziono aktora')
      }
    })
  }
})
myapp.get('/about', (req, res) => {
  res.send('this is about')
})
myapp.post('/contact', (req, res) => {
  // Nodemailer or database
})
myapp.listen(port, () => {
  console.log(`Server is runing! Port: ${port}`)
})