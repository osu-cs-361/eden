import "./App.css";
import Splash from "./screens/Splash";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Home from "./screens/Home";
import AddPlant from "./screens/AddPlant";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/app" exact component={Home} />
        <Route path="/app/add-plant" component={AddPlant} />
      </Switch>
    </>
  );
}

export default App;
