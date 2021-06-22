import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions';
import { Button } from 'antd';
import { LoginOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons';

import SearchBar from './search/SearchBar';

import fullLogo from '../images/vbb-full-logo.png';
// import miniLogo from '../images/vbb-picture-logo.png';

import '../less/index.less';
import '../less/NavBar.less';

const Title = () => (
  <Link to="/" key="link-dashboard">
    <img
      className="logo"
      src={fullLogo}
      alt="Logo for Village Book Builders, small orange hut with Village Book Builders text"
      width="200"
    ></img>
  </Link>
);

const SignInSignOut = ({ authToken, logOut }) =>
  !authToken ? (
    <Link to="/signin" key="link-signin">
      <Button key="0" className="color-549BEA" block>
        Sign In
        <LoginOutlined />
      </Button>
    </Link>
  ) : (
    <Link to="/" key="link-signout">
      <Button key="1" className="color-549BEA" onClick={logOut} block>
        Sign Out
        <LogoutOutlined />
      </Button>
    </Link>
  );

const RegisterButton = () => (
  <Link to="/signup" key="link-signup">
    <Button type="primary" key="2" block>
      Register
      <FormOutlined className="color-white" />
    </Button>
  </Link>
);

/**
 * NavBar
 * Connected functional component
 * Displays Navigation Header Bar
 *
 * @param { Type History } history from react router dom
 * @param {redux store} authToken authentication token from redux store
 * @param {redux action} logOut action from logout import as a connected component
 */
const NavBar = ({ authToken, logOut }) => {
  return (
    <nav className="navbar-page-header navbar-grid width-100">
      <Title />
      <div className="searchbar-wrapper">{authToken && <SearchBar />}</div>
      <div className="navbtn-wrapper">
        <SignInSignOut authToken={authToken} logOut={logOut} />
        <RegisterButton />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    authToken: state.authToken,
  };
};
export default connect(mapStateToProps, { logOut })(NavBar);
