import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/Layout";
import BaseRouter from "./routes";
import "./Style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <BaseRouter />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
