import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Booking from "./components/Booking";
import Profile from "./components/Profile";
import SigninGoogle from "./components/SigninGoogle";

const Routes = () => (
  <div>
    <PrivateRoute exact path="/" component={Profile}/>
    <PrivateRoute exact path="/booking/" component={Booking}/>
    <Route exact path="/signin/" component={SigninGoogle} />
  </div>
);

export default Routes;
