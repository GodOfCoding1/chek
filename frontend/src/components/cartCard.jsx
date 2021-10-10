import { useEffect, useState } from "react";

const CartCard = ({ items }) => {
  const [itemScaned, setItemScaned] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (items.length > 1) {
      setItemScaned(true);
      setTotalPrice(
        items.reduce((a, b) => {
          if (typeof a === "number") {
            return Number(a) + Number(b.price);
          }
          return Number(a.price) + Number(b.price);
        })
      );
      console.log(items);
    }
    if (items.length === 1) {
      setItemScaned(true);
      setTotalPrice(Number(items[0].price));
    }
  }, [items]);
  useEffect(() => {
    console.log("totalPrice", totalPrice);
  }, [totalPrice]);
  return (
    <div>
      {itemScaned ? (
        <div>
          Total:{totalPrice} <button>Check out</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartCard;
