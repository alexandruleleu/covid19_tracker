import React from 'react';
import FilterLink from '../containers/filter';
import { VisibilityFilters } from '../actions/actionTypes';

const Footer = () => (
  <div className="footer-container">
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
