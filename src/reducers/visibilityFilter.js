import { VisibilityFilters } from '../actions/actionTypes';

const visibilityFilter = (state = { filter: VisibilityFilters.SHOW_ALL }, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { filter: action.filter };
    default:
      return state;
  }
};

export default visibilityFilter;
