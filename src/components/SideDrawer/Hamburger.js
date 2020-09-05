import React from 'react';
import './Hamburger.css';

const Hamburger = (props) => {
  let burgerClass = ['hamburger hamburger--spin js-hamburger'];

  if (props.sideDrawerOpen) {
    burgerClass = ['hamburger hamburger--spin js-hamburger', 'is-active'];
  }

  return (
    <button
      className={burgerClass.join(' ')}
      type="button"
      onClick={props.onSideDrawerToggle}
      aria-label="hamburger"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
