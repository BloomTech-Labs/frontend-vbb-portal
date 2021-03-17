import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../style.less';
import AppWrapper from './Layout';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </div>
  );
};

export default App;
