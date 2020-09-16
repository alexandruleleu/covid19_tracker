import React, { useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import '../assets/scss/header.scss';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    const handleOnClick = () => {
      handleClose();
    };
    setTimeout(() => {
      handleOpen();
      window.addEventListener('click', handleOnClick);
    }, 3000);

    return () => {
      window.removeEventListener();
    };
  }, []);

  return (
    <header className="header-container">
      <a href="/home" target="_self" className="header-container--title">
        <h1 className="pageName">COVID-19 Tracker</h1>
      </a>
      <a
        href="https://github.com/alexandruleleu/covid19_tracker"
        target="_target"
        className="header-container--repo"
      >
        <Tooltip
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          TransitionComponent={Zoom}
          title={<h2 style={{ color: '#fff', padding: '5px' }}>Check out the codebase &hearts;</h2>}
          enterDelay={100}
          arrow
        >
          <GitHubIcon />
        </Tooltip>
      </a>
    </header>
  );
};

export default Header;
