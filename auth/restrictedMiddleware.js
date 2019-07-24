const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decode) => {
      if (err) {
        return res
          .status(401)
          .send('authentication failed, please try again later');
      } else {
        req.decode = decode;
        next();
      }
    });
  } else {
    return res.status(401).send('authentication failed, no token provided');
  }
};
