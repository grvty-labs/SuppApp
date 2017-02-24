import loginReducer from './loginReducer';
import { combineReducers } from 'redux';

const root = combineReducers({
  loginReducer,
});

export default root;
