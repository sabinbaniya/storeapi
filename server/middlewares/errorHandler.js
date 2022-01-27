const errorHandler = (req, res) => {
  res.send("The resource you're trying to access does'nt exist").status(404);
};

module.exports = errorHandler;
