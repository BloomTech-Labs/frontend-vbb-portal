import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log('privateroute isauthenticated:');
      console.log(auth.isAuthenticated);
      console.log(props.isAuthenticated);
      console.log(this.props.isAuthenticated);
      console.log("auth");
      console.log(auth);
      if (auth.loading) {
        console.log("auth.loading");
        return <h2>auth.loading...</h2>;
      } else if (auth.token === null) {
        console.log("not authenticated");
        console.log(auth.token);
        console.log(auth.token === null);
        console.log(auth.loading);
        return <Redirect to="/signin" />;
      } else {
        console.log('authenticated');
        console.log(auth.token);
        console.log(auth.token === null);
        console.log(auth.loading);
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state,
  token: state.token,
});


export default connect(mapStateToProps)(PrivateRoute);
