import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import epics from '../epics';
import reducers from '../reducers';
import createLogger from 'redux-logger';

const epicMiddleware = createEpicMiddleware(epics);

export default function configureStore() {
  const logger = createLogger();
  const store = createStore(
    reducers,
    applyMiddleware(epicMiddleware, logger));
  return store;
};
