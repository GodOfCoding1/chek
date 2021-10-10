import axios from "axios";
import React, { useEffect, useState } from "react";
import CartCard from "../components/cartCard";
import ItemCard from "../components/itemCard";
import QRCodeScanner from "../components/QRcodeScanner";

const Store = ({
  match: {
    params: { id },
  },
}) => {
  const [storeData, setStoreData] = useState({});
  const [itemData, setItemData] = useState({});
  const [allItems, setAllitems] = useState([]);

  const handleScannedItem = (newItem) => {
    console.log(newItem);
    setAllitems([...allItems, newItem]);
    setItemData(newItem);
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
      <div>{storeData.store_name}</div>
      <QRCodeScanner setItemData={handleScannedItem} storeID={id} />
      <ItemCard itemData={itemData} />
      <CartCard items={allItems} />
    </>
  );
};

export default Store;
