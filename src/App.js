import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import Layout from "./components/Layout";
// import * from "./components"
import "./Style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          {/* <Route exact path="/" component={Profile} /> */}
          {/* <Route exact path="/profile/" component={Profile} /> */}
          <BaseRouter />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
