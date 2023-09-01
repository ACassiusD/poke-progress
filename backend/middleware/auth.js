const { expressjwt: jwt } = require("express-jwt");
const secretKey = 'YOUR_SECRET_KEY'; //TODO: Store this in a .env file

// JWT Authentication Middleware: Validates JWTs using the secret key.
// Searches for JWT in the Authorization header of the HTTP request.
// On valid JWT, grants access and forwards the request to the subsequent middleware or route handler.
const authenticateJWT = jwt({
  secret: secretKey,
  algorithms: ['HS256']
});

// Export the authentication middleware
module.exports = authenticateJWT;
