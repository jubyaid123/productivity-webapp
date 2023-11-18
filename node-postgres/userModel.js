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

const createTask = async ({ userId, title, task_date, description }) => {
  const query = `
      INSERT INTO tasks (user_id, title, task_date, description)
      VALUES ($1, $2, $3, $4)
      RETURNING *;  // Returns the newly created task
  `;

  const values = [userId, title, task_date, description];

  try {
      const result = await pool.query(query, values);
      return result.rows[0]; // Return the created task
  } catch (error) {
      throw error;
  }
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
  createTask
};