import * as actionTypes from '../actions/actionTypes';
import produce from 'immer';

import {
  CHART_OPTIONS_ALL,
  CHART_OPTIONS_7_DAYS,
  CHART_OPTIONS_LAST_MONTH,
} from '../helpers/helpers';

const initialState = {
  name: 'playground-reducer',
  loading: true,
  chartLoading: false,
  data: {},
  options: {
    ALL: CHART_OPTIONS_ALL,
    SEVEN_DAYS: CHART_OPTIONS_7_DAYS,
    LAST_MONTH: CHART_OPTIONS_LAST_MONTH,
  },
  timeInterval: 'ALL',
  activeOptions: {},
};

const playground = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.METADATA_LOADING:
        draft.loading = true;
        break;
      case actionTypes.CHART_LOADING:
        draft.chartLoading = true;
        break;
      case actionTypes.METADATA_LOADED:
        draft.loading = false;
        draft.data = action.data;
        // ALL
        draft.options['ALL'].data.push({
          type: 'spline',
          name: 'Confirmed',
          showInLegend: true,
          dataPoints: action.data.all_cases.confirmedDataPoints,
          click: action.onClick,
        });
        draft.options['ALL'].data.push({
          type: 'spline',
          name: 'Fatal',
          showInLegend: true,
          dataPoints: action.data.all_cases.fatalDataPoints,
          click: action.onClick,
        });
        // SEVEN DAYS
        draft.options['SEVEN_DAYS'].data.push({
          type: 'stackedColumn',
          name: 'Confirmed',
          showInLegend: true,
          yValueFormatString: '#,###k',
          dataPoints: action.data.seven_days_cases.confirmedDataPoints,
          click: action.onClick,
        });
        draft.options['SEVEN_DAYS'].data.push({
          type: 'stackedColumn',
          name: 'Fatal',
          showInLegend: true,
          yValueFormatString: '#,###k',
          dataPoints: action.data.seven_days_cases.fatalDataPoints,
          click: action.onClick,
        });
        // LAST MONTH
        draft.options['LAST_MONTH'].data.push({
          type: 'stackedColumn',
          name: 'Confirmed',
          showInLegend: true,
          yValueFormatString: '#,###k',
          dataPoints: action.data.last_month_cases.confirmedDataPoints,
          click: action.onClick,
        });
        draft.options['LAST_MONTH'].data.push({
          type: 'stackedColumn',
          name: 'Fatal',
          showInLegend: true,
          yValueFormatString: '#,###k',
          dataPoints: action.data.last_month_cases.fatalDataPoints,
          click: action.onClick,
        });
        draft.activeOptions = draft.options['ALL'];
        break;
      case actionTypes.TIME_INTERVAL_CHANGE:
        draft.chartLoading = false;
        draft.timeInterval = action.val;
        draft.activeOptions = draft.options[action.val];
        break;
      case actionTypes.UNMOUNT_PLAYGROUND:
        draft.options['ALL'].data = [];
        draft.options['SEVEN_DAYS'].data = [];
        draft.options['LAST_MONTH'].data = [];
        break;
      default:
    }
  });
};

export default playground;
