const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'effiflow',
  password: '508abc123',
  port: 5432,
});


const getUserById = (id) => {
  return pool.query('SELECT * FROM users WHERE id = $1', [id]);
};

const getUserByEmail = async (email) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};


const createUser = (user) => {
  const { first_name, last_name, email, password } = user;
  return pool.query(
    'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
    [first_name, last_name, email, password]
  );
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
};