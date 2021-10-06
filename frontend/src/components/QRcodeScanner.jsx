import axios from "axios";
import { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
function QRCodeScanner({ storeID }) {
  const [scanData, setScanData] = useState([]);
  const [itemData, setItemData] = useState({});
  const [flag, setFlag] = useState(false);
  const handleError = (e) => {};
  const handleScan = async (data) => {
    if (flag && data) {
      console.log("data read", data);
      setFlag(false);
      setScanData([...scanData, data]);
      const res_item_data = await axios.get(
        `${process.env.REACT_APP_BACKEND_HOST}/getItemData`,
        {
          headers: {
            item_id: data,
            store_id: storeID,
          },
        }
      );
      console.log(res_item_data.data.itemData);
      setItemData(res_item_data.data.itemData);
    }
  };
  useEffect(() => {
    console.log(itemData);
    return () => {};
  }, [itemData]);
  return (
    <div>
      {flag ? (
        <QrReader
          delay={100}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "50%" }}
        />
      ) : (
        <button
          onClick={() => {
            setFlag(true);
          }}
        >
          Scan
        </button>
      )}
      <h1> {itemData?.name}</h1>
      <h1> {itemData ? "Price " + itemData.price : ""}</h1>
    </div>
  );
}

export default QRCodeScanner;
