const { getItemData, addItemData } = require("../controller/ItemController");
const SignInController = require("../controller/SignInController");
const { getStoreData, addStore } = require("../controller/StoreController");
const authenticate = require("../middleware/authenticate");
const middleware = require("../middleware/middleware");
const {getCSV,setCSV} = require("../controller/CSVController");
const initroute = (app) => {
  app.get("/user/", SignInController().Home);
  app.post("/user/signup", SignInController().SignUp);
  app.post("/user/signin", SignInController().SignIn);
  app.get("/store/getStoreData", getStoreData);
  app.post("/store/addStore", addStore);
  app.get("/item/getItemData", getItemData);
  app.post("/item/addItemData", addItemData);
  app.post("/admin/csv", setCSV);
  app.get("/admin/csv", getCSV);
};

module.exports = initroute;
