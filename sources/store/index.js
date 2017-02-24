import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
import createLogger from 'redux-logger';

export default function configureStore() {
  const logger = createLogger();
  const store = createStore(reducers, applyMiddleware(logger));
  return store;
};
