import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import storeRedux from '../redux/store';
import MainLayout from './MainLayout';

const store = storeRedux();

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
