import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./store/PrivateRoute";

import Booking from "./components/Booking";
import Profile from "./components/Profile";
import SigninGoogle from "./components/SigninGoogle";
import MasterForm from "./components/Registration";

function Routes() {
  return (
    <div>
      <PrivateRoute exact path="/" component={Profile} />
      <PrivateRoute exact path="/booking/" component={Booking} />
      <Route exact path="/signin/" component={SigninGoogle} />
      <Route exact path="/signup/" component={MasterForm} />
    </div>
  );
}

export default Routes;
