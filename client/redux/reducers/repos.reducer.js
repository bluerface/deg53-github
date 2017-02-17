import types from '../types';

var initialState = {
  data: null,
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case types.PLACEHOLDER:
      break;

    default:
      return state;
  }
  return newState;
}
