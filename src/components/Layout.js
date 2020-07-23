import React from "react";
import "../Style.css";
import logo from "../vbb-logo.png";

const Layout = (props) => {
  return (
    <div className="layout">
      <nav className="navbar" class="navbar sticky-top navbar-dark">
        <img src={logo} alt="Logo" style={{ width: "250px" }} />
        <a href="/">
          <h1 style={{ position: "relative", top: "20px" }}>VBB Portal</h1>
        </a>
        <a
          class="btn btn-light donate-button"
          type="button"
          href="https://www.villagebookbuilders.org/giftabook/"
          style={{ position: "relative", top: "15px" }}
        >
          DONATE
        </a>
        <a
          class="btn btn-light signin-button"
          type="button"
          href="/login"
          style={{ position: "relative", top: "15px" }}
        >
          SIGN IN
        </a>
      </nav>
      <br />

      <div className="site-layout-content">{props.children}</div>

      <footer style={{ textAlign: "center" }}>
        &copy; Village Book Builders | All Rights Reserved
      </footer>
    </div>
  );
};

export default Layout;
