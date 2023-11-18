const express = require('express');
const router = express.Router();
const userModel = require('./userModel'); 



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

router.post('/users/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.getUserByEmail(email);
    if (user.length === 0 || user[0].password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal  Error' });
  }
});


module.exports = router;