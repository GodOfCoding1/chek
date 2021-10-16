import {useState} from 'react';
import UploadCSV from './Components/UploadCSV';
import {GoogleLogin} from 'react-google-login';
const App = () => {
  const [auth,setAuth] = useState(null);
  return (
    <>
      {auth ? <UploadCSV profile={auth}/> : <GoogleLogin
            clientId="853282094760-mf7mr4csosgi0rsognc3trg6fgo8do9t.apps.googleusercontent.com"
            buttonText="Login using gmail"
            onSuccess={response => setAuth(response.profileObj)}
            onFailure={response => console.log(response)}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />}
    </>            
  )
}
export default App;