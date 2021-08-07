import "./App.css";
import Splash from "./screens/Splash";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Home from "./screens/Home";
import AddPlant from "./screens/AddPlant";
import EditPlant from "./screens/EditPlant";
import Logout from "./components/Logout";

import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utilities/PrivateRoute";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute path="/app" exact component={Home} />
        <PrivateRoute path="/app/add-plant" component={AddPlant} />
        <PrivateRoute path="/app/edit-plant/:id" component={EditPlant} />
      </Switch>
    </>
  );
}

export default App;
