import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PayBill from "./payBill";

const CartCard = ({ items }) => {
  const [itemScaned, setItemScaned] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    console.log(items);
    if (items.length > 1) {
      setItemScaned(true);
      setTotalPrice(
        items.reduce((a, b) => {
          if (typeof a === "number") {
            return Number(a) + Number(b.price) * b.quantity;
          }
          return Number(a.price) * a.quantity + Number(b.price) * b.quantity;
        })
      );
    }
    if (items.length === 1) {
      setItemScaned(true);
      setTotalPrice(Number(items[0].price) * items[0].quantity);
    }
    if (items.length < 1) {
      setItemScaned(false);
    }
  }, [items]);

  return (
    <div>
      {itemScaned ? (
        <Paper style={{ margin: 20, padding: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Total: {totalPrice}</Typography>
            </div>
            <PayBill amount={totalPrice} />
          </div>
        </Paper>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartCard;
