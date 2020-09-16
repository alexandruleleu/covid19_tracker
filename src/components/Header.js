import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

import '../assets/scss/header.scss';

const Header = () => (
  <header className="header-container">
    <a href="/home" target="_self" className="header-container--title">
      <h1 className="pageName">COVID-19 Tracker</h1>
    </a>
    <a
      href="https://github.com/alexandruleleu/covid19_tracker"
      target="_target"
      className="header-container--repo"
    >
      <GitHubIcon />
    </a>
  </header>
);

export default Header;
