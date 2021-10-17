import { IconButton, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ItemCard = ({ itemData, index, deleteItem }) => {
  return (
    <Paper style={{ margin: 10, padding: 20 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography variant="h6">
            <b>{itemData.name}</b>
          </Typography>

          <Typography variant="body1">Price {itemData.price}</Typography>
        </div>
        <IconButton
          style={{ width: 50, borderRadius: 5 }}
          onClick={() => {
            deleteItem(index);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default ItemCard;
