const {
  getItemData,
  addItemDataAdmin,
  addItemDataStore,
} = require("../controller/ItemController");
const SignInController = require("../controller/SignInController");
const {
  getStoreData,
  addStore,
  loginStoreOwner,
  getStoreDataToken,
} = require("../controller/StoreController");
const { getCSV, setCSV } = require("../controller/CSVController");
const initroute = (app) => {
  //user
  app.get("/user/", SignInController().Home);
  app.post("/user/signup", SignInController().SignUp);
  app.post("/user/signin", SignInController().SignIn);
  //store
  app.get("/store/getStoreData", getStoreData);
  app.post("/store/addStore", addStore);
  app.post("/store/login", loginStoreOwner);
  //storeowener
  app.get("/store/getDataWithToken", getStoreDataToken);
  //items
  app.get("/item/getItemData", getItemData);
  app.post("/item/addItemDataAdmin", addItemDataAdmin);
  app.post("/item/addItemData", addItemDataStore);
  //csv
  app.post("/admin/csv", setCSV);
  app.get("/admin/csv", getCSV);
};

module.exports = initroute;
