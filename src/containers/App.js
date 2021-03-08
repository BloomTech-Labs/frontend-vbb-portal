import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../style.css';

import Layout from './Layout';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
};

export default App;
