// import { ajax } from 'rxjs/observable/dom/ajax';
// import { map, debounceTime } from 'rxjs/operator';
import 'rxjs';
import { LOGIN_SEND } from '../constants';

const loginSendEpic = action$ =>
  action$.ofType(LOGIN_SEND)
    .debounceTime(1000)
    .mergeMap(action =>
      ajax.getJSON('http://192.168.100.4:8001/grvty/api-auth/')
        .map(response => fetchUserFulfilled(response))
    );

export default loginSendEpic;
