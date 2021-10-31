import { useEffect, useState } from "react";
import { Container, Icon, Text } from "@chakra-ui/react";
import PayBill from "./payBill";
import ItemCard from "./itemCard";
import { MdShoppingCart } from "react-icons/md";

const CartCard = ({ items, handleQuantityChange, deleteItem }) => {
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

  const TotalCard = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          background: "white",
          marginTop: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text fontSize={14}>Total: ₹ {totalPrice}</Text>
        </div>
        <PayBill amount={totalPrice} />
      </div>
    );
  };

  return (
    <div>
      {itemScaned ? (
        <Container
          borderRadius={5}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 20,
            paddingTop: 0,
            marginBottom: 20,
            background: "white",
          }}
        >
          <Icon
            as={MdShoppingCart}
            my={4}
            style={{
              fontSize: 40,

              color: "grey",
            }}
          />
          <hr style={{ margin: 0, width: "100%", color: "white" }} />
          {items.length > 0
            ? items.map((item, index) => (
                <ItemCard
                  key={index}
                  index={index}
                  itemData={item}
                  handleQuantityChange={handleQuantityChange}
                  deleteItem={deleteItem}
                />
              ))
            : ""}
          <TotalCard />
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartCard;
