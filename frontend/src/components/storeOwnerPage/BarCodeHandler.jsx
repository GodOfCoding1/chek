import { Box } from "@chakra-ui/react";
import BarCodeScanner from "./BarcodeScanner";

function BarCodeHandler({ items, setItemData }) {
  const handleError = (e) => {
    if (e) {
      window.alert("Some error occured");
    }
  };
  const handleScan = async (data) => {
    if (data) {
      console.log("data read", data);

      try {
        setItemData({ barID: data });
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
      <Box background={"white"} borderRadius={5} style={{ padding: 5 }}>
        <Box overflow={"hidden"} borderRadius={5} height={"30vh"}>
          <BarCodeScanner items={items} getItemID={handleScan} />
        </Box>
      </Box>
    </div>
  );
}

export default BarCodeHandler;
