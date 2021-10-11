import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/not-found";
import Store from "./pages/Store";
import BarcodeScanner from "./components/BarcodeScanner"
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route exact path="/barcode" component={BarcodeScanner} />
        <Route exact path="/store/:id" component={Store} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
