import { LOGIN_DISPLAY, LOGIN_SEND, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants';

const InitialState = {
  dataFetch : false,
  isFetching : false,
  error: false,
  loggedIn : false,
}

export default function loginReducer( state = InitialState, action ){
  switch (action.type){
    case LOGIN_DISPLAY:
      return state;
    case LOGIN_SEND:
      return state;
    case LOGIN_FAILED:
      return state;
    case LOGIN_SUCCESS:
      return state;
    default:
      return state;
  }
}
