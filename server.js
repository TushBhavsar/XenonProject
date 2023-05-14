const mysql = require('mysql2/promise');

// Create a connection pool to the database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'myapp',
});

// Handle the form data and save it to the database
app.post('/users', async (req, res) => {
  // Validate the form data
  const { error, value } = validateFormData(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // Insert a new user into the database
  try {
    const conn = await pool.getConnection();
    const result = await conn.query('INSERT INTO users SET ?', {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });
    conn.release();
    res.send('User saved to database');
  } catch (err) {
    console.error('Error saving user to database', err);
    res.status(500).send('Internal server error');
  }
});
