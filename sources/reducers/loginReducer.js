import {
  LOGIN_DISPLAY,
  LOGIN_SEND,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_CANCELLED
} from '../constants';

const InitialState = {
  dataFetch: false,
  isFetching: false,
  error: false,
  token: null,
};

export default function loginReducer(state = InitialState, action) {
  switch (action.type){
    case LOGIN_DISPLAY:
      return state;
    case LOGIN_SEND:
      return state;
    case LOGIN_FAILED:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case LOGIN_CANCELLED:
      return state;
    default:
      return state;
  }
}
