const StoreDB = require("../model/Store");

const getStoreData = async (req, res) => {
  const { storeID } = req.header;
  try {
    const storeData = await StoreDB.findbyID(storeID);
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

module.exports = { getStoreData };
