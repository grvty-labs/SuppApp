import { LOGIN_SEND, LOGIN_DISPLAY, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants';

export function loginSend(username, password) {
  return {
    type: LOGIN_SEND,
    payload: {
      username,
      password,
    },
  };
};
