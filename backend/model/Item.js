const mongoose = require("mongoose");
const Data = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
  },
  price: {
    type: String,
  },
  img_url: {
    type: String,
  },
});

module.exports = mongoose.model("Item", Data);
