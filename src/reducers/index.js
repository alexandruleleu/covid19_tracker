import { combineReducers } from 'redux';

// Reducers for all components
import playground from './playground';
import details from './details';
import visibilityFilter from './visibilityFilter';

// root reducer
export default combineReducers({
  playgroundReducer: playground,
  detailsReducer: details,
  visibilityFilterReducer: visibilityFilter,
});
