const mongoose = require("mongoose");
const Data = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  itemID: {
    type: String,
    required: true,
  },
  storeID: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  img_url: {
    type: String,
  },
});

module.exports = mongoose.model("Item", Data);
