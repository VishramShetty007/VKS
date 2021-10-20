import { createStore, applyMiddleware, compose } from 'redux';

import reduxThunk from 'redux-thunk';
import persistRootReducer from './root-reducer';

import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

const middlewares = [reduxThunk];

let enhancer = applyMiddleware(...middlewares);

// Add redux-loggger only in developement environment
if (process.env.NODE_ENV === 'development') {
  // Add Redux dev tool
  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) ||
    compose;

  middlewares.push(logger);
  enhancer = composeEnhancers(applyMiddleware(...middlewares));
}

// Create store
export const store = createStore(persistRootReducer, enhancer);

// Add localstorage persistor to our store
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { persistor, store };
