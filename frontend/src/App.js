import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/not-found";
import Store from "./pages/Store";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route exact path="/store/:id" component={Store} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
