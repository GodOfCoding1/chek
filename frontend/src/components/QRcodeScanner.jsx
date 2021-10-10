import axios from "axios";
import { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
function QRCodeScanner({ storeID, setItemData }) {
  const [scanData, setScanData] = useState([]);

  const [flag, setFlag] = useState(false);
  const handleError = (e) => {
    if (e) {
      window.alert("Some error occured");
    }
  };
  const handleScan = async (data) => {
    if (flag && data) {
      console.log("data read", data);
      setFlag(false);
      setScanData([...scanData, data]);
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
        console.log(res.data.itemData);
        setItemData(res.data.itemData);
      } catch (error) {
        window.alert("Some error occured");
        console.log(error);
      }
    }
  };

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
    </div>
  );
}

export default QRCodeScanner;
