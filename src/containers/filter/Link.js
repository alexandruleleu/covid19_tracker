import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const Link = ({ active, children, onClick }) => (
  <Button
    variant="contained"
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '10px',
    }}
  >
    {children}
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
