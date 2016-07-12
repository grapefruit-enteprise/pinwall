import { CATEGORIES } from '../actions/retrieve-categories-action.js';

function categoriesReducer(state = ['category'], action) {
  switch(action.type) {
    case CATEGORIES: return action.payload
  }
  return state;
}

export default categoriesReducer;
