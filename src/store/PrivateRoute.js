import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, token, loading, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log('privateroute isauthenticated:');
      console.log(token);
      console.log(loading);
      //console.log(auth.isAuthenticated);
      //console.log(props.isAuthenticated);
      //console.log(this.props.isAuthenticated);
      //console.log("auth");
      //console.log(auth);
      if (loading) {
        console.log("auth.loading");
        return <h2>auth.loading...</h2>;
      } else if (token === null) {
        console.log("not authenticated");
        console.log(token);
        console.log(token === null);
        console.log(loading);
        return <Redirect to="/signin" />;
      } else {
        console.log('authenticated');
        console.log(token);
        console.log(token === null);
        console.log(loading);
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  //auth: state,
  token: state.token,
  loading: state.loading,
});


export default connect(mapStateToProps)(PrivateRoute);
