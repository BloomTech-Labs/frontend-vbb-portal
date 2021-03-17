import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import '../style.less';
import MainLayout from './MainLayout';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MainLayout />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
