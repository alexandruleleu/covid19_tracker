import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import '../assets/scss/filterSection.scss';

const FilterSection = ({ title, timeInterval, items, handleChange }) => {
  return (
    <div className="filter-container">
      <div className="graph-title">{title}</div>
      <div className="basetime-select">
        <FormControl className="form-container">
          <InputLabel id="select-filled-label">Time interval</InputLabel>
          <Select
            labelId="select-filled-label"
            id="select-filled"
            value={timeInterval}
            onChange={(ev) => handleChange(ev.target.value)}
          >
            {items.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default FilterSection;
