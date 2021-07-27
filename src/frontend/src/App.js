import "./App.css";
import Splash from "./screens/Splash";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
