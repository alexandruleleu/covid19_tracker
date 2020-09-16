import * as actionTypes from './actionTypes';

export default {
  metadataLoading() {
    return {
      type: actionTypes.METADATA_LOADING,
    };
  },

  chartLoading() {
    return {
      type: actionTypes.CHART_LOADING,
    };
  },

  metadataLoaded(data, onClick) {
    return {
      type: actionTypes.METADATA_LOADED,
      data,
      onClick,
    };
  },

  metadataError(err) {
    return {
      type: actionTypes.METADATA_ERROR,
      err,
    };
  },

  unmountPlayground() {
    return {
      type: actionTypes.UNMOUNT_PLAYGROUND,
    };
  },

  timeIntervalChange(val) {
    return {
      type: actionTypes.TIME_INTERVAL_CHANGE,
      val,
    };
  },

  detailsLoading() {
    return {
      type: actionTypes.DETAILS_LOADING,
    };
  },

  detailsLoaded(data) {
    return {
      type: actionTypes.DETAILS_LOADED,
      data,
    };
  },

  detailsError(err) {
    return {
      type: actionTypes.DETAILS_ERROR,
      err,
    };
  },
};
