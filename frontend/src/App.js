import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/not-found";
import Store from "./pages/Store";
import BarCodeScanner from "./components/BarcodeScanner";
import NavBar from "./components/nav-bar";
import { CssBaseline } from "@mui/material";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route exact path="/barcode" component={BarCodeScanner} />
        <Route exact path="/storeHome/:id" component={Store} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
