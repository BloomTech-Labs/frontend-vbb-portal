import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import '../style.less';
<<<<<<< HEAD

=======
>>>>>>> f0ffe4c82bf6ff13b9540e1437640259b9436a69
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
