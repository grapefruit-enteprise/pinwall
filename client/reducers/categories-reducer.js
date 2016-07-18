import { CATEGORIES } from '../actions/types'

const INITIAL_STATE = { categories: []  };

export default function( state = INITIAL_STATE , action) {
  switch(action.type) {
    case CATEGORIES:
      return {...state, categories: action.payload}
  }
  return state;
}
