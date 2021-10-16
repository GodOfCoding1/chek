require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
const URL = process.env.URL;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const payementRoutes = require("./routes/paymentRoutes");

const connection = () =>
  mongoose
    .connect(URL, {})
    .then((data) => {
      console.log("Connected databse", data.connection.host);
    })
    .catch((err) => {
      console.log(err);
    });
connection();
const corsOption = {
  credentials: true,
  origin: true,
};

app.use(express.static(path.join(__dirname, "build")));
app.use("/public", express.static(path.resolve(__dirname, "public")));

app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
//logger
app.use(morgan("tiny"));

app.use("*", function (req, res, next) {
  if (
    !req.baseUrl.includes("/item/") &&
    !req.baseUrl.includes("/store/") &&
    !req.baseUrl.includes("/payment/") &&
    !req.baseUrl.includes("/user/")
  ) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  } else {
    next();
  }
});
//routes
require("./routes/web")(app);
app.use("/payment", payementRoutes);

app.listen(PORT, (req, res) => console.log(`Server is running on ${PORT}`));
