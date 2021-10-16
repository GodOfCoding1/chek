const loggerMiddleware = function (req, res, next) {
  try {
    console.log(
      "\n---logger---" + req.url + "  ip= " + req.connection.remoteAddress
    );
  } catch (error) {
    console.log(error);
  }
  next();
};

module.exports = {
  loggerMiddleware,
};
