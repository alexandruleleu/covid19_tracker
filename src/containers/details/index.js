import { connect } from 'react-redux';
import DetailsComponent from './Details';

import { fetchDetails } from '../../actions';

const mapStateToProps = (state) => ({ ...state.detailsReducer });

const mapDispatchToProps = (dispatch) => ({
  onFetchDetails: (payload) => {
    dispatch(fetchDetails(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsComponent);
