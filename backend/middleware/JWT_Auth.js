const jwt = require("jsonwebtoken");

const JWTAuthMiddleware = function (req, res, next) {
  console.log(
    "\n-----[JWT MiddleWare] JWT Middleware " +
      req.url +
      "  ip= " +
      req.connection.remoteAddress
  );
  if (
    req.url.includes("/store/getDataWithToken") ||
    req.url.includes("/item/addItemData")
  ) {
    const token = req.headers.token;

    if (!token || token === "" || token.includes("object")) {
      console.log("[JWT MiddleWare] No token found");
      res.status(401).send("Unauthorized: Token not found ");
    } else {
      console.log("[JWT MiddleWare] token found");
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          console.log("[JWT MiddleWare] user is not autherised. Error :", err);
          res.status(401).send("Unauthorized: Invalid token");
        } else {
          console.log("[JWT MiddleWare] User is autherised ", decoded);
          req.headers.tokenData = decoded;
          next();
        }
      });
    }
  } else {
    next();
  }
};

const GenerateJWT = function (data) {
  var user = { userData: data };
  payload = user;
  token = jwt.sign(payload, process.env.TOKEN_SECRET);
  return token;
};

const getUserData = (token) => {
  return jwt.verify(token, process.env.TOKEN_SECRET).userData;
};

module.exports = {
  JWTAuthMiddleware,
  GenerateJWT,
  getUserData,
};
