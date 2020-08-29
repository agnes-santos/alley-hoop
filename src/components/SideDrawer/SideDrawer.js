import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideDrawer.css';

const sideDrawer = (props) => {
  const { onSideDrawerToggle } = props;
  let handleClick = () => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) onSideDrawerToggle();
  };

  let drawerClass = ['side-drawer'];

  if (props.show) {
    drawerClass = ['side-drawer', 'open'];
  }
  return (
    <nav className={drawerClass.join(' ')}>
      <div>
        <NavLink to="/games-today" activeClassName="side-drawer-selected" onClick={handleClick}>
          Games Today
        </NavLink>
      </div>
      <div>
        <NavLink to="/about" activeClassName="side-drawer-selected" onClick={handleClick}>
          About
        </NavLink>
      </div>
      {/* <div>
          <a href="/">Teams</a>
        </div>
        <div>
          <a href="/">Players</a>
        </div>
        <div>
          <a href="/">Standings</a>
        </div> */}
    </nav>
  );
};

export default sideDrawer;
