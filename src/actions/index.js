import { getMetadata, getDetails } from '../helpers/helpers';
import actionCreators from './actionCreators';

export const fetchMetadata = (onClick) => async (dispatch) => {
  dispatch(actionCreators.metadataLoading());

  try {
    const res = await getMetadata();
    dispatch(actionCreators.metadataLoaded(res, onClick));
  } catch (err) {
    console.log(err);
    dispatch(actionCreators.metadataError(err));
  }
};

export const fetchDetails = (payload) => async (dispatch) => {
  dispatch(actionCreators.detailsLoading());
  try {
    const res = await getDetails(payload);
    dispatch(actionCreators.detailsLoaded(res));
    window.scrollTo({
      top: 500,
      behavior: 'smooth',
    });
  } catch (err) {
    console.log(err);
    dispatch(actionCreators.detailsError(err));
  }
};

export const unmountPlayground = () => (dispatch) => {
  dispatch(actionCreators.unmountPlayground());
};

export const timeIntervalChange = (val) => (dispatch) => {
  dispatch(actionCreators.chartLoading());
  setTimeout(() => {
    dispatch(actionCreators.timeIntervalChange(val));
  }, 0);
};
