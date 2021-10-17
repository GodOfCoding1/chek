import { IconButton, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CounterInput from "react-bootstrap-counter";

const ItemCard = ({ itemData, index, deleteItem, handleQuantityChange }) => {
  const handleQuantity = (newValue) => {
    handleQuantityChange(newValue, index);
  };
  return (
    <Paper style={{ margin: 10, padding: 20 }}>
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
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <img width={100} src={itemData.img_url} alt="..."></img>
          </div>
          <div style={{ marginLeft: 10 }}>
            <Typography variant="h6">
              <b>{itemData.name}</b>
            </Typography>

            <Typography variant="body1">Price {itemData.price}</Typography>
          </div>
        </div>
        <div>
          <div style={{ width: "115px" }}>
            <CounterInput onChange={handleQuantity} value={itemData.quantity} />
          </div>
          {/* <IconButton
            style={{ width: 50, borderRadius: 5 }}
            onClick={() => {
              deleteItem(index);
            }}
          >
            <DeleteIcon />
          </IconButton> */}
        </div>
      </div>
    </Paper>
  );
};

export default ItemCard;
