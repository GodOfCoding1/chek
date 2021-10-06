const { getItemData, addItemData } = require("../controller/ItemController");
const SignInController = require("../controller/SignInController");
const { getStoreData } = require("../controller/StoreController");
const authenticate = require("../middleware/authenticate");
const middleware = require("../middleware/middleware");

const initroute = (app) => {
  app.get("/", SignInController().Home);
  app.post("/signup", SignInController().SignUp);
  app.post("/signin", SignInController().SignIn);
  app.get("/getStoreData", getStoreData);
  app.get("/getItemData", getItemData);
  app.post("/addItemData", addItemData);
};

module.exports = initroute;
