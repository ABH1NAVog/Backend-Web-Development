module.exports = function timing(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    const elapsed = Date.now() - start;

    if (req.id) {
      console.log(
        `[${req.id}] ${req.method} ${req.path} took ${elapsed}ms`
      );
    } else {
      console.log(
        `${req.method} ${req.path} took ${elapsed}ms`
      );
    }
  });

  next();
};