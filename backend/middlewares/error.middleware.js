const handleErrors = (err, req, res, next) => {
  console.error('SERVER ERROR:', err);
  res.status(500).json({
    message: 'Server error',
    error: err.message || 'An unknown error occurred'
  });
};

module.exports = handleErrors;
