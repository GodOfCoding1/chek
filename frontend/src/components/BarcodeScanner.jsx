import Quagga from 'quagga';
import React from 'react';
const BarcodeScanner = () => {
    const [flag, setFlag] = React.useState(false);
    React.useEffect(() => {
        Quagga.init({
            inputStream: {
                type: 'LiveStream',
                target=""
                constraints: {
                    width: 640,
                    height: 320,
                    facingMode: 'environment',
                },
            },
            locator: {
                halfSample: true,
                patchSize: "large", 
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
                        showBB: true
                    }
                }
            },
            numOfWorkers: 4,
            decoder: {
                readers: ['code_128_reader'],
                debug: {
                    drawBoundingBox: true,
                    showFrequency: true,
                    drawScanline: true,
                    showPattern: true
                },
            },
            locate: true,
        },
            function (err) {
                if (err) {
                    return console.log(err)
                }
            });
        Quagga.onDetected(function (result) {
            console.log(result);
        })
    }, [])
    React.useEffect(() => {
        if (flag) {
            Quagga.start();
        }
        else Quagga.stop();
    },[flag])
    return (<>
    <div id="myhead"></div>
        {flag?<button onClick={()=>{setFlag(true)}}>Scan</button>:null}
    </>)
}
export default BarcodeScanner;