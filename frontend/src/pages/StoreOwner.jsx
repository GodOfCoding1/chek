import axios from "axios";
import React, { useEffect, useState } from "react";
import CartCard from "../components/storeClientPage/cartCard";
import BarCodeHandler from "../components/storeClientPage/BarCodeHandler";
import { Container, Text } from "@chakra-ui/react";
import PageWrapper from "./PageWrapper";
import NavBar from "../components/nav-bar";
import ItemCard from "../components/storeOwnerPage/itemCard";

const StoreName = ({ name }) => {
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <Text fontSize={"large"}>
        <b>{name}</b>
      </Text>
    </div>
  );
};

const StoreOwner = () => {
  const [storeData, setStoreData] = useState({});
  const [allItems, setAllitems] = useState([]);
  const token = localStorage.getItem("token");

  const getStoreDetails = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_HOST}/store/getDataWithToken`,
        {
          headers: {
            token,
          },
        }
      );
      console.log(res.data);
      setStoreData({ store_name: res.data.store_name });
    } catch (error) {
      window.alert("Some error occured");
      console.log(error);
    }
  };

  const handleScannedItem = (newItem) => {
    const namesOfItems = allItems.map((item) => item.barID);
    if (!namesOfItems.includes(newItem.barID)) {
      setAllitems([...allItems, { ...newItem }]);
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

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getStoreDetails();
    } else {
      window.alert("You are not logged in");
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <PageWrapper>
        <Container style={{ padding: 0 }}>
          <StoreName name={storeData.store_name} />
          <BarCodeHandler items={allItems} setItemData={handleScannedItem} />
          {allItems.map((item, index) => (
            <ItemCard
              key={index}
              itemData={item}
              index={index}
              token={token}
              handleQuantityChange={handleQuantityChange}
              deleteItem={deleteItem}
            />
          ))}
        </Container>
      </PageWrapper>
    </>
  );
};

export default StoreOwner;
