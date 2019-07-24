const express = require('express');
const bcrypt = require('bcryptjs');
const { createUser } = require('../users/usersModel');
const validateUserMiddleware = require('./validateUserMiddleware');

const router = express.Router();

router.post('/register', validateUserMiddleware, async (req, res) => {
  try {
    const { username, password, department } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await createUser({
      username,
      password: hashedPassword,
      department
    });
      return res.status(201).json({
          message: 'user created successfully',
          user
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'could not create user' });
  }
});

module.exports = router;
