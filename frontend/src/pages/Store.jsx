import axios from "axios";
import React, { useEffect } from "react";
import QRCodeScanner from "../components/QRcodeScanner";

const Store = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <>
      <div>store id is {id}</div>
      <QRCodeScanner storeID={id} />
    </>
  );
};

export default Store;
