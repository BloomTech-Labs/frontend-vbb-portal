import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import storeRedux from '../redux/store';
import '../style.less';
import MainLayout from './MainLayout';
import Modal from '../components/Modal/Modal';

const store = storeRedux();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MainLayout />
          <Modal />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
