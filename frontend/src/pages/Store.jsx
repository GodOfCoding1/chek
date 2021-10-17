import axios from "axios";
import React, { useEffect, useState } from "react";
import CartCard from "../components/cartCard";
import ItemCard from "../components/itemCard";
import NavBar from "../components/nav-bar";
import BarCodeHandler from "../components/BarCodeHandler";
import BarCodeScanner from "../components/BarcodeScanner";
import { Typography } from "@mui/material";

const StoreName = ({ name }) => {
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <Typography variant="h5">
        <b>{name}</b>
      </Typography>
    </div>
  );
};

const Store = ({
  match: {
    params: { id },
  },
}) => {
  const [storeData, setStoreData] = useState({});
  const [allItems, setAllitems] = useState([]);

  const handleScannedItem = (newItem) => {
    const namesOfItems = allItems.map((item) => item.name);
    if (!namesOfItems.includes(newItem.name)) {
      setAllitems([...allItems, { ...newItem, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (newValue, index) => {
    if (newValue === 0) {
      deleteItem(index);
      return;
    }
    let newAllItems = allItems;
    newAllItems[index].quantity = newValue;
    setAllitems(newAllItems);
  };

  const deleteItem = (id) => {
    setAllitems(allItems.filter((item, index) => index !== id));
  };

  const getStoreDetails = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_HOST}/store/getStoreData`,
        {
          headers: {
            store_id: id,
          },
        }
      );
      console.log(res.data.storeData);
      setStoreData(res.data.storeData);
    } catch (error) {
      window.alert("Some error occured");
      console.log(error);
    }
  };

  useEffect(() => {
    getStoreDetails();
  }, []);

  return (
    <>
      <NavBar />
      <StoreName name={storeData.store_name} />
      <BarCodeHandler
        items={allItems}
        setItemData={handleScannedItem}
        storeID={id}
      />
      {allItems.length > 0
        ? allItems.map((item, index) => (
            <ItemCard
              key={index}
              index={index}
              itemData={item}
              handleQuantityChange={handleQuantityChange}
              deleteItem={deleteItem}
            />
          ))
        : ""}
      <CartCard items={allItems} />
    </>
  );
};

export default Store;
