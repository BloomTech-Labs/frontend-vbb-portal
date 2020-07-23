import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Layout from "./components/Layout";
import Profile from "./components/Profile";
import "./Style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Route exact path="/" component={Profile} />
          {/* <Route exact path="/profile/" component={Profile} /> */}
          {/* <BaseRouter /> */}
        </Layout>
      </Router>
    </div>
  );
}

export default App;
