import {useState, useEffect} from 'react';
const UploadCSV = ({profile}) => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);
    const upload = () => {
        const jsonData = JSON.stringify({
            data: data,
            email: profile.email,
        });
        console.log(jsonData);
    }
    useEffect(() => {
        if (!file) return;
        var reader = new FileReader();
        reader.onload = ()=>{
            var result = reader.result;
            setData(result);
        }
        reader.readAsDataURL(file)
    },[file])
    return <>
        <input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={upload} disabled={!data}>Upload</button>
    </>
}
export default UploadCSV;
