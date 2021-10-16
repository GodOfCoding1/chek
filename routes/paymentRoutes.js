const express = require("express");
const route = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

//replace with dynamic key and secret using env
const razorpay = new Razorpay({
  key_id: "rzp_test_ReGiRmOe2lo2wA",
  key_secret: "Tkjf7E0Tun3cbb3coQxuPhJP",
});

route.post("/verification", async (req, res) => {
  res.send({ status: "ok" });
  // do a validation
  //const secret = process.env.RAZORPAY_VERIFICATION_SECRET;
  //replace with .env
  const secret = "12345678";
  console.log("data given by webhook of razorPay", req.body);

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");
  console.log(digest);
  console.log(req.headers["x-razorpay-signature"]);

  console.log(
    Razorpay.validateWebhookSignature(
      req.body,
      req.headers["x-razorpay-signature"],
      "12345678"
    )
  );

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("payment has been made and captured");
  } else {
    // pass it
  }
});

route.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const { amount, currency } = req.body;
  const options = {
    payment_capture,
    amount: amount * 100,
    currency,
  };
  try {
    const response = await razorpay.orders.create(options);
    res.send({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      //replace with env
      key: "rzp_test_ReGiRmOe2lo2wA",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
});

route.get("/getKey", async (req, res) => {
  //replace with dynamic key
  res.send({ key: "rzp_test_ReGiRmOe2lo2wA" });
});

module.exports = route;
