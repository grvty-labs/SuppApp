import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import loginEpics from './loginEpics';

const root = combineEpics(
  loginEpics,
);

export default root;
