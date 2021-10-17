const ItemDB = require("../model/Item");

const getItemData = async (req, res) => {
  const { item_id, store_id } = req.headers;

  try {
    const itemData = await ItemDB.findOne({
      storeID: store_id,
      itemID: item_id,
    });

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

const addItemData = async (req, res) => {
  try {
    const item = await new ItemDB(req.body);
    await item
      .save()
      .then((data) => {
        console.log(`Saved Successfully`, data);
        return res.send({ success: true, message: "Saved" });
      })
      .catch((err) => {
        console.log(err);
        return res.send({
          status: 400,
          success: false,
          message: "error in saving to database",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, message: error.message });
  }
};

module.exports = { getItemData, addItemData };
