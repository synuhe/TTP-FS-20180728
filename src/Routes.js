import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";

const Routes = props => {
  const isLoggedIn = true;
  return (
    <div>
      <Switch>
        {/* Routes anyone can get to */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* Fallback to home page */}
        <Route path="/" component={Homepage} />
        {/* Routes that only logged in users can access */}
        {isLoggedIn && (
          <Switch>
            <Route path="/profile" component={Profile} />
          </Switch>
        )}
      </Switch>
    </div>
  );
};

export default Routes;
