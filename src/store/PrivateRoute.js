import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, token, loading, isLoading, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log('privateroute isauthenticated:');
      console.log(token);
      console.log(loading);
      console.log(isLoading);
      console.log(isAuthenticated);
      if (loading) {
        console.log("auth.loading");
        return <h2>auth.loading...</h2>;
      } else if (token === null) {
        return <Redirect to="/signin" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  //auth: state,
  token: state.token,
  loading: state.loading,
  isLoading: state.isLoading,
  isAuthenticated: state.isAuthenticated,
});


export default connect(mapStateToProps)(PrivateRoute);
