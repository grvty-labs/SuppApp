import loginReducer from './loginReducer';
import productsReducer from './productsReducer';
import { combineReducers } from 'redux';

const root = combineReducers({
  loginReducer,
  productsReducer,
});

export default root;
