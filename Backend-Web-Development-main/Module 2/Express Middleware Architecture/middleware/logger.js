module.exports = function logger(req, res, next) {
  res.on("finish", () => {
    if (req.id) {
      console.log(`[${req.id}] ${req.method} ${req.path} ${res.statusCode}`);
    } else {
      console.log(`${req.method} ${req.path} ${res.statusCode}`);
    }
  });

  next();
};