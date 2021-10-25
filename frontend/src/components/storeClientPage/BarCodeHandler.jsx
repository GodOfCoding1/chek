import { Button, Paper } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import BarCodeScanner from "./BarcodeScanner";

function BarCodeHandler({ items, storeID, setItemData }) {
  const handleError = (e) => {
    if (e) {
      window.alert("Some error occured");
    }
  };
  const handleScan = async (data) => {
    if (data) {
      console.log("data read", data);

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_HOST}/item/getItemData`,
          {
            headers: {
              item_id: data,
              store_id: storeID,
            },
          }
        );
        console.log({ ...res.data.itemData, barID: data });
        setItemData({ ...res.data.itemData, barID: data });
      } catch (error) {
        window.alert("Some error occured");
        console.log(error);
      }
    }
  };

  return (
    <div
      style={{
        margin: 20,
        textAlign: "center",
      }}
    >
      <Paper style={{ padding: 5 }}>
        <BarCodeScanner items={items} getItemID={handleScan} />
      </Paper>
    </div>
  );
}

export default BarCodeHandler;
