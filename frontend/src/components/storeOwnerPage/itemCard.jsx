import {
  Box,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
const ItemCard = ({
  itemData,
  index,
  handleQuantityChange,
  deleteItem,
  token,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    itemID: itemData.barID,
    expiry: "",
    price: "",
    quantity: 1,
  });

  const deleteThisItem = () => {
    deleteItem(index);
  };

  const handleQuantity = (newNumber) => {
    handleQuantityChange(newNumber, index);
  };

  const uploadItem = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_HOST}/item/addItemData`,
        formData,
        {
          headers: {
            token,
          },
        }
      );
      window.alert(res.data.message);
      if (res.data.success) {
        deleteThisItem();
      }
    } catch (error) {
      window.alert("Some error occured");
      console.log(error);
    }
  };

  return (
    <>
      <Box w={"100%"} backgroundColor={"white"} py={5} px={5}>
        <VStack spacing={3}>
          <Text style={{ marginLeft: 10 }} variant="h6" textAlign={"center"}>
            Item ID: <b>{itemData.barID}</b>
          </Text>

          <FormControl id="name">
            <FormLabel>Name :</FormLabel>
            <Input
              type="name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </FormControl>
          <Container width={100}>
            <NumberInput
              size="sm"
              onChange={handleQuantity}
              value={itemData.quantity}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Container>

          <FormControl id="price">
            <FormLabel>Price (₹) :</FormLabel>
            <Input
              type="price"
              value={formData.price}
              onChange={(e) => {
                setFormData({ ...formData, price: e.target.value });
              }}
            />
          </FormControl>
          <Button onClick={uploadItem}>Add Item</Button>
        </VStack>
      </Box>
      <hr style={{ margin: 0, width: "100%", color: "white" }} />
    </>
  );
};

export default ItemCard;
