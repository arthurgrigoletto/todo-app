import { DESCRIPTION_CHANGED, TODO_SEARCH, TODO_ADD } from '../actions/types';

const INITIAL_STATE = {
  description: '',
  list: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DESCRIPTION_CHANGED:
      return {
        ...state,
        description: action.payload
      };
    case TODO_SEARCH:
      return {
        ...state,
        list: action.payload.data
      };
    case TODO_ADD:
      return {
        ...state,
        description: '',
      }
    default:
      return state;
  }
};
