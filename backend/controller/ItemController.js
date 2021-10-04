const ItemDB = require("../model/Item");

const getItemData = async (req, res) => {
  const { itemID, storeID } = req.header;
  try {
    const itemData = await ItemDB.findOne({ storeID, itemID });
    if (!itemData)
      return res.send({
        status: 404,
        message: "item with given id not found",
      });
    res.send({ success: true, itemData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, message: error.message });
  }
};

module.exports = { getItemData };
