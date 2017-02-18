import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import repos from './repos.reducer.js';

const reducer = combineReducers({
  repos,
  form
});

export default reducer;
