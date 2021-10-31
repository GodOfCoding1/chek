import axios from "axios";
import React, { useEffect, useState } from "react";
import CartCard from "../components/storeClientPage/cartCard";
import BarCodeHandler from "../components/storeClientPage/BarCodeHandler";
import { Container, Text } from "@chakra-ui/react";
import PageWrapper from "./PageWrapper";
import NavBar from "../components/nav-bar";

const StoreName = ({ name }) => {
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <Text fontSize={"large"}>
        <b>{name}</b>
      </Text>
    </div>
  );
};

const StoreClient = ({
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
    if (newValue === 0 || newValue === "0") {
      deleteItem(index);
      return;
    }
    let newAllItems = [...allItems];
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
      <Container style={{ padding: 0 }}>
        <StoreName name={storeData.store_name} />
        <BarCodeHandler
          items={allItems}
          setItemData={handleScannedItem}
          storeID={id}
        />

        <CartCard
          handleQuantityChange={handleQuantityChange}
          deleteItem={deleteItem}
          items={allItems}
        />
      </Container>
    </>
  );
};

export default StoreClient;
