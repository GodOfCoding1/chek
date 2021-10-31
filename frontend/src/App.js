import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/not-found";
import Home from "./pages/Home";
import StoreClient from "./pages/StoreClient";
import StoreOwner from "./pages/StoreOwner";
import Login from "./pages/StoreSignIn";
import Register from "./pages/StoreSignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/storeHome/:id" component={StoreClient} />
        <Route exact path="/storeOwner" component={StoreOwner} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
