import {
  PRODUCTS_DATA_DISPLAY,
  PRODUCTS_DATA_SEND,
  PRODUCTS_DATA_SUCCESS,
  PRODUCTS_DATA_FAILED
} from '../constants';

const InitialState = {
  dataFetch: false,
  isFetching: false,
  error: false,
  products: [],
};

export default function productsReducer(state = InitialState, action) {
  switch (action.type) {
    case PRODUCTS_DATA_DISPLAY:
      return state;
    case PRODUCTS_DATA_SEND:
      return state;
    case PRODUCTS_DATA_FAILED:
      return state;
    case PRODUCTS_DATA_SUCCESS:
      return state;
    default:
      return state;
  }
}
