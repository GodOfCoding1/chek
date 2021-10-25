import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/not-found";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Login from "./pages/StoreSignIn";
import Register from "./pages/StoreSignUp";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/storeHome/:id" component={Store} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
