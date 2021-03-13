import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Button, PageHeader } from 'antd';
import { LoginOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons';

import fullLogo from '../images/vbb-full-logo.png';
import miniLogo from '../images/vbb-picture-logo.png';

const NavBar = ({ logout, authToken }) => {
  console.log('Logout', logout);
  console.log('AuthToken', authToken);

  const signInSignOut = !authToken ? (
    <Link to="/signin" key="link-1">
      <Button key="1" style={{ marginTop: '15px', color: '#549bea' }}>
        Sign In
        <LoginOutlined />
      </Button>
    </Link>
  ) : (
    <Link to="/" key="link-1">
      <Button
        key="1"
        style={{ marginTop: '15px', color: '#549bea' }}
        onClick={logout}
      >
        Sign Out
        <LogoutOutlined />
      </Button>
    </Link>
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
        <Link to="/">
          <img
            src={fullLogo}
            alt="Logo for Village Book Builders, small orange hut with Village Book Builders text"
            width="200"
          ></img>
        </Link>
      }
      extra={[
        signInSignOut,
        <Link to="/signup" key="link-2">
          <Button type="primary" key="2">
            Register
            <FormOutlined style={{ color: 'white' }} />
          </Button>
        </Link>,
      ]}
    ></PageHeader>
  );
};
// export const NavBar = ({ logout, authToken }) => {
//   return (
//     <nav
//       className="navbar sticky-top  navbar-expand-lg navbar-light"
//       id="vbb-full-bar"
//     >
//       <Link to="/" id="full-logo" type="button">
//         <img
//           src={fullLogo}
//           alt="Logo for Village Book Builders, small orange hut with Village Book Builders text"
//           style={{ width: '200px', marginLeft: '30px' }}
//         />
//       </Link>
//       <Link to="/" id="mini-logo">
//         <img
//           src={miniLogo}
//           alt="Small logo for Village Book Builders, small orange hut with Village Book Builders text"
//           style={{ width: '45px' }}
//         />
//       </Link>
//       <Link to="/" id="bar-header-link">
//         <h1 id="bar-header" style={{ marginBottom: '-25px' }}>
//           Vbb Portal
//           <span className="badge badge-secondary">NEW</span>
//         </h1>
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarTogglerDemo02"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//         {authToken ? (
//           <div className="btn-pair">
//             <Link
//               className="btn btn-light donate-btn"
//               type="button"
//               to="/donate/"
//               style={{ marginRight: '20px' }}
//             >
//               DONATE
//             </Link>
//             <Link
//               className="btn btn-light signout-btn"
//               type="button"
//               to="/signin/"
//               onClick={logout}
//             >
//               SIGN OUT
//             </Link>
//           </div>
//         ) : (
//           <div className="btn-pair">
//             <Link
//               className="btn btn-light signup-btn"
//               type="button"
//               to="/signup/"
//               style={{ marginRight: '20px' }}
//             >
//               REGISTER
//             </Link>
//             <Link
//               className="btn btn-light signin-btn"
//               type="button"
//               to="/signin/"
//             >
//               SIGN IN
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

const mapStateToProps = (state) => {
  return {
    authToken: state.authToken,
  };
};
export default withRouter(connect(mapStateToProps, actions)(NavBar));
