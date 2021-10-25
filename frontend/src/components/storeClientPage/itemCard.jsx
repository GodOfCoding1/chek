import { IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@chakra-ui/react";
import DeleteIcon from "@mui/icons-material/Delete";
import CounterInput from "react-bootstrap-counter";

const ItemCard = ({ itemData, index, deleteItem, handleQuantityChange }) => {
  const handleQuantity = (newValue) => {
    handleQuantityChange(newValue, index);
  };
  return (
    <>
      <Box w={"100%"} backgroundColor={"white"} py={20}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ marginLeft: 10 }}>
              <Typography variant="h6">
                <b>{itemData.name}</b>
              </Typography>

              <Typography variant="body2">Price ₹ {itemData.price}</Typography>
            </div>
          </div>
          <div>
            <div style={{ width: "115px", marginInline: 5 }}>
              <CounterInput
                onChange={handleQuantity}
                value={itemData.quantity}
              />
            </div>
          </div>
          <div>
            <Typography variant="h6" style={{ textWrap: "none" }}>
              ₹{itemData.quantity * itemData.price}
            </Typography>
          </div>
        </div>
      </Box>{" "}
      <hr style={{ margin: 0, width: "100%", color: "white" }} />
    </>
  );
};

export default ItemCard;
