import * as actionTypes from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  name: 'details-reducer',
  loading: false,
  data: [],
  total: {},
};

const details = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.DETAILS_LOADING:
        draft.loading = true;
        break;
      case actionTypes.DETAILS_LOADED:
        draft.loading = false;
        draft.data = action.data.details;
        draft.total = action.data.total;
        break;
      default:
    }
  });
};

export default details;
