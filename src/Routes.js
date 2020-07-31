import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./store/PrivateRoute";

import Booking from "./components/Booking";
import Profile from "./components/Profile";
import SigninGoogle from "./components/SigninGoogle";

const BaseRouter = () => (
  <div>
    <PrivateRoute exact path="/" component={Profile} {...this.props}/>
    <PrivateRoute exact path="/booking/" component={Booking} {...this.props}/>
    <Route exact path="/signin/" component={SigninGoogle} />
  </div>
);

export default BaseRouter;
