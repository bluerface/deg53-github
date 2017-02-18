import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import repos from './repos.reducer.js';
import entities from './entities.reducer.js';
import ui from './ui.reducer.js';

const reducer = combineReducers({
  repos,
  ui,
  entities,
  form
});

export default reducer;
