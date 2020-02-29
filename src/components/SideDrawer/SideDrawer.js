import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClass = ['side-drawer'];

    if(props.show) {
        drawerClass = ['side-drawer', 'open'];
    }
    return (
        <nav className={drawerClass.join(' ')}>
            <ul>
                <li><a href="/">Games</a></li>
                <li><a href="/">Teams</a></li>
                <li><a href="/">Players</a></li>
                <li><a href="/">Standings</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;