import {
  Box,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
} from "@chakra-ui/react";
const ItemCard = ({ itemData, index, handleQuantityChange }) => {
  const handleQuantity = (newValue) => {
    handleQuantityChange(newValue, index);
  };
  return (
    <>
      <Box w={"100%"} backgroundColor={"white"} py={5}>
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
              <Text variant="h6">
                <b>{itemData.name}</b>
              </Text>

              <Text variant="body2">Price ₹ {itemData.price}</Text>
            </div>
          </div>
          <div>
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
          </div>
          <div>
            <Text variant="h6" style={{ paddingInline: 15, textWrap: "none" }}>
              ₹{itemData.quantity * itemData.price}
            </Text>
          </div>
        </div>
      </Box>{" "}
      <hr style={{ margin: 0, width: "100%", color: "white" }} />
    </>
  );
};

export default ItemCard;
