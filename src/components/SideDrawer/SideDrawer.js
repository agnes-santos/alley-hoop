import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Games</a></li>
            <li><a href="/">Teams</a></li>
            <li><a href="/">Players</a></li>
            <li><a href="/">Standings</a></li>
        </ul>
    </nav>
);

export default sideDrawer;