import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Booking from './Booking';
import Dashboard from './Dashboard';
import MasterForm from './registration/MasterForm';
import HomeSignin from './HomeSignin';
import SessionDetails from './SessionDetails';
import Donation from './registration/Donation';
// import Donation from "./registration/Donation"

function Routes() {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>

        <PrivateRoute exact path="/booking/">
          <Booking />
        </PrivateRoute>

        <Route exact path="/signin/" >
          <HomeSignin />
        </Route>

        <Route exact path="/signup/">
          <MasterForm />
        </Route>

        <Route
          exact path="/sessiondetails/:sessionid/">
          <SessionDetails />
        </Route>

        <Route exact path="/donate/">
          <Donation />
        </Route>

      </Switch>
    </div>
  );
}

export default Routes;
