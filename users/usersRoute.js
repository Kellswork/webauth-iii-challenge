const express = require('express');
const restricted = require('../auth/restrictedMiddleware');
const router = express.Router();
module.exports = router;

const { getUsers } = require('./usersmodel');

router.get('/', restricted, async (req, res) => {
    try {
    const users = await getUsers(req.decode.department);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send('oopssyy uhm cannot get them users right now');
  }
});

module.exports = router;