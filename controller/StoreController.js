const StoreDB = require("../model/Store");
const bcrypt = require("bcrypt");

const getStoreData = async (req, res) => {
  const { store_id } = req.headers;
  try {
    const storeData = await StoreDB.findOne({ store_id });
    if (!storeData)
      return res.send({
        status: 404,
        message: "store with given id not found",
      });
    res.send({ success: true, storeData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, message: error.message });
  }
};
const addStore = async (req, res) => {
  try {
    const { store_name, store_email, store_address, password } = req.body;
    if (!store_name || !store_address || !store_email || !password)
      return res.send({ success: false, message: "Enter all Details" });

    const passwordHased = await bcrypt.hash(password, 10);

    const x = await StoreDB.findOne({ store_email });
    if (x)
      return res.send({ success: false, message: "Email Already exists!" });

    const totalNumberOfStores = await StoreDB.count();
    const store_id = totalNumberOfStores + 1;
    const store = await new StoreDB({
      store_id,
      store_name,
      store_email,
      store_address,
      password: passwordHased,
    });

    await store
      .save()
      .then((store) => {
        console.log(`Successfully Registered`, store);
        return res.send({
          success: true,
          storeData: store,
          message: "Successfully Registered",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.send({
          status: 400,
          success: false,
          message: "Error in saving to database",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, message: error.message });
  }
};

module.exports = { getStoreData, addStore };
