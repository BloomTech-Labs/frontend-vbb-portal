import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Button, PageHeader } from 'antd';
import { LoginOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons';
import SearchBarAutoComplete from './search-bar/SearchBarAutoComplete';

import fullLogo from '../images/vbb-full-logo.png';
// import miniLogo from '../images/vbb-picture-logo.png';

/**
 * NavBar
 * Connected functional component
 * Displays Navigation Header Bar
 *
 * @param { Type History } history from react router dom
 * @param {redux store} authToken authentication token from redux store
 * @param {redux action} logOut action from logout import as a connected component
 */
const NavBar = ({ history, authToken, logOut }) => {
  const signInSignOut = !authToken ? (
    <Link to="/signin" key="link-signin">
      <Button key="0" style={{ marginTop: '15px', color: '#549bea' }}>
        Sign In
        <LoginOutlined />
      </Button>
    </Link>
  ) : (
      <React.Fragment key="group">
        <SearchBarAutoComplete key="searchBarAutoComplete"/>
        <Link to="/" key="link-signout">
          <Button
            key="1"
            style={{ marginTop: '15px', color: '#549bea' }}
            onClick={logOut}
          >
            Sign Out
            <LogoutOutlined />
          </Button>
        </Link>
      </React.Fragment>
  );
  return (
    <PageHeader
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: '#ff914d',
      }}
      title={
        <Link to="/" key="link-dashboard">
          <img
            src={fullLogo}
            alt="Logo for Village Book Builders, small orange hut with Village Book Builders text"
            width="200"
          ></img>
        </Link>
      }
      extra={[
        signInSignOut,
        <Link to="/signup" key="link-signup">
          <Button type="primary" key="2">
            Register
            <FormOutlined style={{ color: 'white' }} />
          </Button>
        </Link>,
      ]}
    ></PageHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    authToken: state.authToken,
  };
};
export default withRouter(connect(mapStateToProps, actions)(NavBar));
