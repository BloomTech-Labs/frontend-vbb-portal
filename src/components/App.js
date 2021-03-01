import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Booking from './Booking';
import Dashboard from './Dashboard';
import MasterForm from './registration/MasterForm';
import HomeSignin from './HomeSignin';
import SessionDetails from './SessionDetails';
import Donation from './registration/Donation';
import { connect } from 'react-redux';
import '../style.css';
import * as actions from '../redux/actions';
import Layout from './Layout';

const App = () => {
  return (
    <div className="App">
      <Switch>

        <Layout />

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
};

const mapStateToProps = (state) => {
  return {
    // isAuthenticated: state.token !== null,
    // isLoading: state.loading,
    // error: state.isError.isError,
    // message: state.isError.message,
  };
};

export default connect(mapStateToProps, actions)(App);
