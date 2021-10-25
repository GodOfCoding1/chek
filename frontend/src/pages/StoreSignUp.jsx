import PageWrapper from "./PageWrapper";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    store_name: "",
    store_email: "",
    store_phone: "",
    password: "",
    store_address: "",
  });
  const handleSignUp = async () => {
    try {
      console.log(`${process.env.REACT_APP_BACKEND_HOST}/store/addStore`);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_HOST}/store/addStore`,
        formData
      );

      window.alert(res.data.message);
      if (res.success) {
        window.location.href = "/login";
      }
    } catch (err) {
      window.alert("Some error occured");
      console.log(err);
    }
  };
  return (
    <>
      <PageWrapper>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign Up Your Store</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                and say bye to queues in your store ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="store_name">
                  <FormLabel>Store Name</FormLabel>
                  <Input
                    type="store_name"
                    value={formData.store_name}
                    onChange={(e) => {
                      setFormData({ ...formData, store_name: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl id="address">
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="address"
                    noOfLines={2}
                    value={formData.store_address}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        store_address: e.target.value,
                      });
                    }}
                  />
                </FormControl>{" "}
                <FormControl id="number">
                  <FormLabel>Contact No</FormLabel>
                  <Input
                    type="number"
                    value={formData.store_phone}
                    onChange={(e) => {
                      setFormData({ ...formData, store_phone: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={formData.store_email}
                    onChange={(e) => {
                      setFormData({ ...formData, store_email: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                    }}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </PageWrapper>
    </>
  );
};

export default Register;
