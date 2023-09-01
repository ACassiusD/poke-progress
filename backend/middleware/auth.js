const { expressjwt: jwt } = require("express-jwt");

const secretKey = 'YOUR_SECRET_KEY';

const authenticateJWT = jwt({
  secret: secretKey,
  algorithms: ['HS256']
});

module.exports = authenticateJWT;
