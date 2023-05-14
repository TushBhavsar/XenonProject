const http = require('http');
const url = require('url');
const mysql = require('mysql');

// create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

// connect to the database
connection.connect();

// create a server that listens for incoming requests
http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  // handle POST requests to /submit
  if (req.method === 'POST' && pathname === '/submit') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      const { name, email, phone } = JSON.parse(data);

      // insert the data into the database
      const query = `INSERT INTO users (name, email, phone) VALUES ('${name}', '${email}', '${phone}')`;
      connection.query(query, (error, results) => {
        if (error) {
          console.error(error);
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else {
          res.statusCode = 200;
          res.end('Data inserted successfully');
        }
      });
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}).listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});02