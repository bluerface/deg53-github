import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import entities, * as fromEntities from './entities.reducer.js';
import ui from './ui.reducer.js';

const reducer = combineReducers({
  ui,
  entities,
  form
});

export default reducer;

export const getReposArray = (state) =>
  fromEntities.getReposArray(state.entities);
