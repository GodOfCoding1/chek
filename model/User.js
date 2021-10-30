const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Data = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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

Data.methods.generateAuthToken = async function () {
  try {
    // console.log("secret is", process.env.ACCESS_TOKEN_SECRET);
    let token = jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model("User", Data);
