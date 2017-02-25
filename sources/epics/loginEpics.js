import { ajax } from 'rxjs/observable/dom/ajax';

// import { map, debounceTime } from 'rxjs/operator';
import 'rxjs';
import { LOGIN_SEND, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_CANCELLED } from '../constants';

const loginSendEpic = action$ =>
  action$.ofType(LOGIN_SEND)
    .debounceTime(1000)
    .switchMap(action =>
      ajax({
        url: 'http://192.168.100.4:8001/grvty/api-auth/',
        method: 'POST',
        body: action.payload, })
        .map(data => ({ type: LOGIN_SUCCESS, payload: data.response.token }))
        .catch(data => ({ type: LOGIN_FAILED, payload: data })))
    .takeUntil(action$.ofType(LOGIN_CANCELLED));

export default loginSendEpic;
