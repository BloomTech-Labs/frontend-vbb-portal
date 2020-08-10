import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Booking from "./components/Booking";
import Dashboard from "./components/Dashboard";
import HomeSignin from "./components/HomeSignin";
import MasterForm from "./components/Registration";

function Routes() {
  return (
    <div>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/booking/" component={Booking} />
      <Route exact path="/signin/" component={HomeSignin} />
      <Route exact path="/signup/" component={MasterForm} />
    </div>
  );
}

export default Routes;
