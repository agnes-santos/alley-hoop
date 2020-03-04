import React from 'react';

import Hamburger from '../SideDrawer/Hamburger';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <Hamburger 
                    onSideDrawerToggle={props.onSideDrawerToggle}
                    sideDrawerOpen={props.sideDrawerOpen}    
                />
        <nav className="toolbar-navigation">
    
            <div className="toolbar-logo"><a href="/">Alley Hoop</a></div>
            
            <div className="toolbar-current-page">Scores</div>

            <div className="toolbar-timezone">All times shown are in {Intl.DateTimeFormat().resolvedOptions().timeZone} Timezone</div>
        </nav>
    </header>
);

export default toolbar;