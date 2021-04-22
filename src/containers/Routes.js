import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Booking from '../components/Booking';
import Dashboard from '../components/Dashboard';
import MasterForm from '../components/registration/MasterForm';
import HomeSignin from '../components/HomeSignin';
import SessionDetails from '../components/SessionDetails';
import Donation from '../components/registration/Donation';
import TempRegistration from '../components/registration/TempRegistration';
import SearchBarAutoComplete  from '../components/search-bar/beginning';

const Routes = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/searchbar">
          <SearchBarAutoComplete/>
        </Route>
        <Route exact path="/register/">
          <TempRegistration />
        </Route>
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
        <Route exact path="/sessiondetails/:sessionid/">
          <SessionDetails />
        </Route>
        <Route exact path="/donate/">
          <Donation />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
