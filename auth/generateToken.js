const secret = require('../config/secret');
const jwt = require('jsonwebtoken');

function generateToken(user) {
    const payload = {
        id: user.id,
        username: user.username,
        department: user.department
    }
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret.jwtSecret, options)
}

module.exports = generateToken;