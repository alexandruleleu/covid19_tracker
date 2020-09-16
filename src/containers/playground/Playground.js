import React, { useEffect, useRef } from 'react';

import { useHistory } from 'react-router-dom';
import FilterSection from '../../components/FilterSection';
import CircularProgress from '@material-ui/core/CircularProgress';
import CanvasJSReact from '../../assets/lib/canvasjs.react';
import { formatDate } from '../../helpers/helpers';

import './index.scss';

const PlaygroundComponent = ({
  loading,
  chartLoading,
  timeInterval,
  activeOptions,
  onFetchMetadata,
  onUnmountPlayground,
  onTimeIntervalChange,
}) => {
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const chartEl = useRef(null);
  const history = useHistory();
  const handleSelectChange = (val) => {
    onTimeIntervalChange(val);
  };

  const filterSectionProps = {
    title: 'United States',
    timeInterval,
    handleChange: handleSelectChange,
    items: [
      { value: 'ALL', label: 'All time' },
      { value: 'SEVEN_DAYS', label: 'Last 7 days' },
      { value: 'LAST_MONTH', label: 'Last Month' },
    ],
  };

  const handleChartClick = (e) => {
    history.push(`/home/${formatDate(e.dataPoint.x)}`);
  };

  useEffect(() => {
    onFetchMetadata(handleChartClick);
    return () => {
      onUnmountPlayground();
    };
  }, [onFetchMetadata, onUnmountPlayground]);

  if (loading)
    return (
      <section className="playground-container playground-container--progress">
        <CircularProgress />
      </section>
    );

  return (
    <section className="playground-container">
      <FilterSection {...filterSectionProps} />
      {chartLoading ? (
        <div className="chart-loader-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="chart-container">
          <CanvasJSChart options={activeOptions} ref={chartEl} />
        </div>
      )}
    </section>
  );
};

export default PlaygroundComponent;
