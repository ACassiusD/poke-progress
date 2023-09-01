/**
 * Error handling middleware.
 * 
 * Checks if the error is an 'UnauthorizedError' which is typically thrown by authentication middlewares 
 * when there's an issue with a JWT or if the JWT is missing. If so, it sends a 401 response.
 * For all other errors, it forwards the error to the next middleware in line.
 * 
 * @param {Error} err - The error object.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function.
 */
module.exports = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid Token or No Token Provided');
  } else {
    next(err);
  }
};

//TODO: Enhance the error handling middleware to handle more types of errors.
