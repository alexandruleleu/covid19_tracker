import { connect } from 'react-redux';
import PlaygroundComponent from './Playground';
import { fetchMetadata, unmountPlayground, timeIntervalChange } from '../../actions';

const mapStateToProps = (state) => ({ ...state.playgroundReducer });

const mapDispatchToProps = (dispatch) => ({
  onFetchMetadata: (onClick) => {
    dispatch(fetchMetadata(onClick));
  },
  onUnmountPlayground: () => {
    dispatch(unmountPlayground());
  },
  onTimeIntervalChange: (val) => {
    dispatch(timeIntervalChange(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundComponent);
