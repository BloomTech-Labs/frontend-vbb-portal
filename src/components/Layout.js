import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import fullLogo from "../vbb-full-logo.png";

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <nav className="navbar sticky-top navbar-dark">
          <a
            href="https://www.villagebookbuilders.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fullLogo} alt="Logo" style={{ width: "250px" }} />
          </a>
          <a href="/">
            <h1 style={{ position: "relative", top: "20px" }}>VBB Portal</h1>
          </a>
          {this.props.isAuthenticated ? (
            <div>
              <a
                className="btn btn-light donate-btn"
                type="button"
                href="https://www.villagebookbuilders.org/giftabook/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "relative", top: "15px" }}
              >
                DONATE
              </a>
              <a
                className="btn btn-light signin-btn"
                type="button"
                href="/signin/"
                style={{ position: "relative", top: "15px" }}
                onClick={this.props.logout}
              >
                SIGN OUT
              </a>
            </div>
          ) : (
            <div>
              <a
                className="btn btn-light donate-btn"
                type="button"
                href="/signup/"
                style={{ position: "relative", top: "15px" }}
              >
                REGISTER
              </a>
              <a
                className="btn btn-light signin-btn"
                type="button"
                href="/signin/"
                style={{ position: "relative", top: "15px" }}
              >
                SIGN IN
              </a>
            </div>
          )}
        </nav>

        <div className="content">{this.props.children}</div>

        <footer>&copy; Village Book Builders | All Rights Reserved</footer>
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
