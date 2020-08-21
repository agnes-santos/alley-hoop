import React from 'react';
import Logo from '../logo.svg';
import Hamburger from '../SideDrawer/Hamburger';
import './Toolbar.css';

const toolbar = (props) => (
  <header className="toolbar">
    <Hamburger
      onSideDrawerToggle={props.onSideDrawerToggle}
      sideDrawerOpen={props.sideDrawerOpen}
    />
    <nav className="toolbar-nav">
      <span className="toolbar-logo">
        <Logo />
        Alley Hoop
      </span>
      <span className="toolbar-current-page">Games Today</span>
      <span className="toolbar-timezone">
        All times shown are in {Intl.DateTimeFormat().resolvedOptions().timeZone} Timezone
      </span>
    </nav>
  </header>
);

export default toolbar;
