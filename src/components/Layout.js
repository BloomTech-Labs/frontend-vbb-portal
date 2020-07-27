import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import "../Style.css";
import logo from "../vbb-logo.png";

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <nav className="navbar sticky-top navbar-dark">
          <img src={logo} alt="Logo" style={{ width: "250px" }} />
          <a href="/">
            <h1 style={{ position: "relative", top: "20px" }}>VBB Portal</h1>
          </a>
          <a
            className="btn btn-light donate-button"
            type="button"
            href="https://www.villagebookbuilders.org/giftabook/"
            style={{ position: "relative", top: "15px" }}
          >
            DONATE
          </a>
          <a
            className="btn btn-light signin-button"
            type="button"
            href="/signin/"
            style={{ position: "relative", top: "15px" }}
          >
            SIGN IN
          </a>
        </nav>
        <br />

        <div className="site-layout-content">{this.props.children}</div>

        <footer style={{ textAlign: "center" }}>
          &copy; Village Book Builders | All Rights Reserved
        </footer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Layout));
