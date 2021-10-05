import {useState,useEffect} from 'react'
import QrReader from 'react-qr-reader'
function App() {
  const [scanData, setScanData] = useState([]);
  const [flag, setFlag] = useState(false);
  const handleError = (e)=>{
  }
  const handleScan = (data)=>{
    if(flag && data){
      setFlag(false);
      setScanData([...scanData,data]);
    }
  }
  useEffect(() => {
    console.log(scanData)
    return () => {
      
    }
  }, [scanData])
  return(
    <div>
        {flag?<QrReader
          delay={100}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '50%' }}
        />:<button onClick={()=>{setFlag(true)}}>Scan</button>}
      </div>
  )
  
  
}

export default App;
