import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';

import styles from '../assets/scss/loader.module.scss';

const Loader = ({ containerHeight, color }) => {
  const containerClasses = classNames({
    [styles.loaderContainer]: true,
    [styles.mediumContainer]: containerHeight === 'medium',
    [styles.smallContainer]: containerHeight === 'small',
  });
  return (
    <section className={containerClasses}>
      <CircularProgress color={color} />
    </section>
  );
};

Loader.propTypes = {
  containerHeight: PropTypes.string,
  color: PropTypes.string,
};

export default Loader;
