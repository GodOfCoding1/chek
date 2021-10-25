const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Data = mongoose.Schema({
  store_id: { type: String, required: true, unique: true },
  store_name: {
    type: String,
    required: true,
  },
  store_email: {
    type: String,
    required: true,
  },
  store_address: {
    type: String,
    required: true,
  },
  store_phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

Data.methods.generateAccessToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model("Store", Data);
