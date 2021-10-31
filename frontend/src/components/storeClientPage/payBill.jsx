import React from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function PayBill({ amount }) {
  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_BACKEND_HOST}/payment/razorpay`, {
        amount,
        currency: "INR",
      })
      .then((res) => {
        console.log(res.data);

        const user = localStorage.getItem("user");

        let options = {
          //enter key below
          key: res.data.key,
          currency: res.data.currency,
          amount: res.data.amount.toString(),
          order_id: res.data.id,
          name: "Pay Bill",
          handler: function (response) {
            window.alert("Payment made successfully.");
          },
        };
        if (user) {
          options.prefill = {
            name: user.name,
            email: user.email,
            phone_number: user.cust_ph_num,
          };
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      })
      .catch((err) => {
        window.alert("Some error occured in connecting to RazorPay");
        console.log(err);
      });
  };

  return (
    <Button
      colorScheme="teal"
      style={{ borderRadius: 5 }}
      onClick={() => {
        if (window.confirm("Are you sure you want to check out?")) {
          displayRazorpay();
        }
      }}
    >
      CheckOut
    </Button>
  );
}

export default PayBill;
