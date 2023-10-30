const express = require('express');
const router = express.Router();
const userModel = require('./userModel'); // Assuming userModels.js is in the same directory



// Route to get user by email
router.get('/users/email/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await userModel.getUserByEmail(email);
    res.json(user.rows);
  } catch (error) {
    console.error('Error getting user by email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new user
router.post('/users', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const user = { first_name, last_name, email, password };
  try {
    const newUser = await userModel.createUser(user);
    res.json(newUser.rows[0]); // Assuming RETURNING * returns the created user
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/api/users/login', async (req, res) => {
  console.log('Login endpoint accessed'); // Log to check if the endpoint is accessed
  console.log('Received data:', email, password); // Log to check if request body is received correctly

  const { email, password } = req.body;

  try {
    const user = await userModel.getUserByEmail(email);
    if (user.rows.length === 0 || user.rows[0].password !== password) {
      // If no user is found with the given email or password doesn't match, return 401 Unauthorized
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;