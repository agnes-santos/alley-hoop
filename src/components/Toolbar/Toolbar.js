import React from 'react';

import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div>=</div>
            <div className="toolbar-logo"><a href="/">Out of Bounds</a></div>
            <div className="spacer" />
            
            <div className="toolbar-current-page">Scores</div>
            <div className="spacer" />

            <div className="toolbar-timezone">{Intl.DateTimeFormat().resolvedOptions().timeZone} Timezone</div>
        </nav>
    </header>
);

export default toolbar;