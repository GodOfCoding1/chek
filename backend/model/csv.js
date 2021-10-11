const mongoose = require("mongoose");
const Data = mongoose.Schema({
    email: String,
    data: String
});

module.exports = mongoose.model("CSV", Data);