import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
import createLogger from 'redux-logger';

const logger = createLogger();

export default function configureStore() {
  let store = createStore(reducers, applyMiddleware(logger));
  return store;
};
