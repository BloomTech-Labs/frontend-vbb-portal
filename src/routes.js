import React from "react";
import { Route } from "react-router-dom";

import Booking from "./components/Booking";
import Profile from "./components/Profile";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Profile} />
    <Route exact path="/booking/" component={Booking} />
    {/* <Route exact path="/profile/" component={Profile} /> */}
  </div>
);

export default BaseRouter;
