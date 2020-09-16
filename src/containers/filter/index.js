import { connect } from 'react-redux';
import Link from './Link';
import { setVisibilityFilter } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilterReducer.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
