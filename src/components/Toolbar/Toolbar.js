import React from 'react';

import Hamburger from '../SideDrawer/Hamburger';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div>
                <Hamburger 
                    onSideDrawerToggle={props.onSideDrawerToggle}
                    sideDrawerOpen={props.sideDrawerOpen}    
                />
            </div>
            <div className="toolbar-logo"><a href="/">Out of Bounds</a></div>
            <div className="spacer" />
            
            <div className="toolbar-current-page">Scores</div>
            <div className="spacer" />

            <div className="toolbar-timezone">{Intl.DateTimeFormat().resolvedOptions().timeZone} Timezone</div>
        </nav>
    </header>
);

export default toolbar;