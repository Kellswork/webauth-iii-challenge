const express = require('express');
const auth = require('./auth/authRoute');
const users = require('./users/usersRoute');
const server = express();

server.use(express.json());
server.use('/api/auth', auth);
server.use('/api/users', users);


module.exports = server;