import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import logo from "../vbb-logo.png";

class Layout extends React.Component {
  render() {
    console.log("layout isauthenticated:");
    console.log(this.props.isAuthenticated);
    return (
      <div className="layout">
        <nav className="navbar sticky-top navbar-dark">
          <img src={logo} alt="Logo" style={{ width: "250px" }} />
          <a href="/">
            <h1 style={{ position: "relative", top: "20px" }}>VBB Portal</h1>
          </a>
          {this.props.isAuthenticated ? (
            <div>
              <a
                className="btn btn-light donate-button"
                type="button"
                href="https://www.villagebookbuilders.org/giftabook/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "relative", top: "15px" }}
              >
                DONATE
              </a>
              <a
                className="btn btn-light signin-button"
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
                className="btn btn-light donate-button"
                type="button"
                href="/signup/"
                style={{ position: "relative", top: "15px" }}
              >
                REGISTER
              </a>
              <a
                className="btn btn-light signin-button"
                type="button"
                href="/signin/"
                style={{ position: "relative", top: "15px" }}
              >
                SIGN IN
              </a>
            </div>
          )}
        </nav>
        <br />

        <div className="content">{this.props.children}</div>

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
