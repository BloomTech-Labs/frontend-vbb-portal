import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, token, loading, isLoading, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (loading) {
        return <h2>Loading...</h2>;
      } else if (token === null) {
        return <Redirect to="/signin" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  token: state.token,
  loading: state.loading,
});


export default connect(mapStateToProps)(PrivateRoute);
