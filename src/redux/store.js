import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

/*
 * Exports the store and adds redux dev tools and thunk middleware
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeRedux = () => createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default storeRedux;
