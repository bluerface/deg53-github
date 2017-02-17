import {combineReducers} from 'redux';

import repos from './repos.reducer.js';

const reducer = combineReducers({
  repos
});

export default reducer;
