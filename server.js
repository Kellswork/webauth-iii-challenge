const express = require('express');
const auth = require('./auth/authRoute');
const server = express();

server.use(express.json());
server.use('/api/auth', auth);

module.exports = server;