import React from 'react';
import { useLocation } from 'react-router-dom';
import './Toolbar.css';

//Components
import Logo from '../logo.svg';
import Hamburger from '../SideDrawer/Hamburger';

// Animation
import { motion, AnimatePresence } from 'framer-motion';
import { slideUp } from '../../utils/variants';

const toolbar = (props) => {
  const currentPage = useLocation().pathname.replace('/', '').replace('-', ' ');
  const { onSideDrawerToggle, sideDrawerOpen } = props;
  const rightSide =
    currentPage === 'games today'
      ? 'All times shown are in ' + Intl.DateTimeFormat().resolvedOptions().timeZone + 'Timezone'
      : '';
  return (
    <header className="toolbar">
      <nav className="toolbar-nav">
        <span className="toolbar-logo">
          <Hamburger onSideDrawerToggle={onSideDrawerToggle} sideDrawerOpen={sideDrawerOpen} />
          <Logo />
          Alley Hoop
        </span>
        <span className="toolbar-current-page">
          <AnimatePresence initial={false}>
            <motion.span
              variants={slideUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              className=""
              key={currentPage}
            >
              {currentPage}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="toolbar-right">
          <AnimatePresence initial={false}>
            <motion.span
              variants={slideUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={currentPage}
              className=""
            >
              {rightSide}
            </motion.span>
          </AnimatePresence>
        </span>
      </nav>
    </header>
  );
};

export default toolbar;
