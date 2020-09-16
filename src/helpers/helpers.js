import api from './api';
export const BASE_URL_METADATA = 'https://api.covidtracking.com/';
export const BASE_URL_DETAILS = 'https://covid-api.com/';
const COMMON_OPTIONS = {
  animationEnabled: true,
  title: {
    text: 'Spread over time',
    fontFamily: 'verdana',
  },
};

export const CHART_OPTIONS_ALL = {
  ...COMMON_OPTIONS,
  axisY: {
    title: 'Cases',
  },
  toolTip: {
    shared: true,
  },
  data: [],
};

export const CHART_OPTIONS_7_DAYS = {
  ...COMMON_OPTIONS,
  axisY: {
    title: 'Cases',
    includeZero: true,
  },
  toolTip: {
    shared: true,
    reversed: true,
  },
  legend: {
    verticalAlign: 'center',
    horizontalAlign: 'right',
    reversed: true,
    cursor: 'pointer',
  },
  data: [],
};

export const CHART_OPTIONS_LAST_MONTH = {
  ...COMMON_OPTIONS,
  axisY: {
    title: 'Cases',
    includeZero: true,
  },
  toolTip: {
    shared: true,
    reversed: true,
  },
  legend: {
    verticalAlign: 'center',
    horizontalAlign: 'right',
    reversed: true,
    cursor: 'pointer',
  },
  data: [],
};

function formatMetadata(cases, min, max) {
  return cases.slice(min, max).reduce(
    (acc, day) => {
      acc.confirmedDataPoints = [
        ...acc.confirmedDataPoints,
        {
          y: day.positive || 0,
          x: new Date(day.lastModified.slice(0, 10)),
        },
      ];
      acc.fatalDataPoints = [
        ...acc.fatalDataPoints,
        { y: day.death || 0, x: new Date(day.lastModified.slice(0, 10)) },
      ];
      return acc;
    },
    {
      confirmedDataPoints: [],
      fatalDataPoints: [],
    }
  );
}

export async function getMetadata() {
  try {
    const casesData = await api.get(BASE_URL_METADATA, '/v1/us/daily.json');
    // todo -> compute the days number of last month
    return {
      all_cases: formatMetadata(casesData, 0, casesData.length),
      seven_days_cases: formatMetadata(casesData, 0, 7),
      last_month_cases: formatMetadata(casesData, computeNrDays().min, computeNrDays().max),
    };
  } catch (err) {
    // eslint-disable-next-line
    throw {
      message: err.error || err.message || err.errors[0].message || 'Something went wrong',
      type: err.type || 'error',
    };
  }
}

export async function getDetails(payload) {
  try {
    const [details, total] = await Promise.all([
      api.get(BASE_URL_DETAILS, `api/reports?date=${payload}&iso=USA`),
      api.get(BASE_URL_DETAILS, `api/reports/total?date=${payload}`),
    ]);
    return { details: details.data, total: total.data };
  } catch (err) {
    // eslint-disable-next-line
    throw {
      message: err.error || err.message || err.errors[0].message || 'Something went wrong',
      type: err.type || 'error',
    };
  }
}

export const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// computes the days number between current day and previous month
export const computeNrDays = () => {
  let finalResult = 0;
  const currDay = new Date(),
    year = currDay.getFullYear(),
    month = currDay.getMonth();
  finalResult += currDay.getDate() - 1;
  finalResult += getDaysInMonth(new Date(year, month - 1));
  return {
    max: finalResult,
    min: currDay.getDate() - 1,
  };
};
