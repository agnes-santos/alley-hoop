import React from 'react';

import './Loader.css';

const Loader = props => {
    // let backdropClass = ['backdrop'];

    // if(props.show) {
    //     backdropClass = ['backdrop', 'show']
    // }
    return (
        <div className="loader-container">
            <div className="loader-ball-container">
                <div className="loader-ball">
                    <div className="loader-ball-line" />
                    <div className="loader-ball-line" />
                    <div className="loader-ball-line" />
                    <div className="loader-ball-line" />
                </div>
            </div>
            <div className="loading">Loading</div>
        </div>
    );
};

export default Loader;