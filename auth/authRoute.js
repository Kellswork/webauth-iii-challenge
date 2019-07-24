const express = require('express');
const bcrypt = require('bcryptjs');
const { createUser, findUsername } = require('../users/usersModel');
const validateUserMiddleware = require('./validateUserMiddleware');
const generateToken = require('./generateToken');
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

router.post('/login', async (req, res) => {
    try {
      let { username, password } = req.body;
      const user = await findUsername(username).first();
      if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          console.log(user)
        res.status(200).json({
          message: `Welcome ${user.username}`,
          token
        });
      } else {
        res.status(401).json({ message: 'You shall not pass' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
