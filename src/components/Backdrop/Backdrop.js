import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  let backdropClass = ['backdrop'];

  if (props.show) {
    backdropClass = ['backdrop', 'show'];
  }
  return <div className={backdropClass.join(' ')} onClick={props.onBackdropClick} />;
};

export default backdrop;
