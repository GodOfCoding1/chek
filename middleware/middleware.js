const authenticate = require("./authenticate");

const middleware = {
  authenticate: authenticate,
};

module.exports = middleware;
