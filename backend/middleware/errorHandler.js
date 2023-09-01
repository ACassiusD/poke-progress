module.exports = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid Token or No Token Provided');
    } else {
      next(err);
    }
  };

//TODO: Enhance the error handling middleware to handle more types of errors.