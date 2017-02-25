import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import epics from '../epics';
import reducers from '../reducers';
import createLogger from 'redux-logger';

const epicMiddleware = createEpicMiddleware(epics);
const logger = createLogger();

export default function configureStore() {
  const store = createStore(
    reducers,
    applyMiddleware(epicMiddleware, logger));
  return store;
};
