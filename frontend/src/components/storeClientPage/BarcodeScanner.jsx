import React, { Component, useEffect } from "react";
import Quagga from "quagga";
import { useState } from "react";

class Scanner extends Component {
  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",

          target: document.querySelector("#barcode-scanner"),
        },
        locator: {
          halfSample: true,
          patchSize: "medium", // x-small, small, medium, large, x-large
          debug: {
            showCanvas: true,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
              showTransformed: true,
              showTransformedBox: true,
              showBB: true,
            },
          },
        },
        numOfWorkers: 4,
        decoder: {
          readers: ["upc_reader"],
          debug: {
            drawBoundingBox: true,
            showFrequency: true,
            drawScanline: true,
            showPattern: true,
          },
        },
        locate: true,
      },
      function (err) {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(this._onDetected);
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
  }

  _onDetected = (result) => {
    this.props.onDetected(result);
  };

  render() {
    return (
      <div id="barcode-scanner">
        <video style={{ marginTop: "-10vh", width: "100%" }} src=""></video>
        <canvas style={{ display: "none" }} className="drawingBuffer"></canvas>
      </div>
    );
  }
}

const BarCodeScanner = ({ getItemID, items }) => {
  const [IDs, setIDs] = useState([]);
  const _onDetected = (e) => {
    console.log(e.codeResult.code);

    if (!IDs.includes(e.codeResult.code)) {
      window.alert("sacned", e.codeResult.code);
      setIDs([...IDs, e.codeResult.code]);
      getItemID(e.codeResult.code);
    }
  };
  useEffect(() => {
    const idOfItems = items.map((item) => item.barID);
    setIDs(idOfItems);
  }, [items]);

  return <Scanner onDetected={_onDetected} />;
};

export default BarCodeScanner;
