import React from 'react';
import { useLocation } from 'react-router-dom';
import './Toolbar.css';
import { RiMapPinTimeLine, RiInformationLine } from 'react-icons/ri';

//Components
import Logo from '../logo.svg';
import Hamburger from '../SideDrawer/Hamburger';

// Animation
import { motion, AnimatePresence } from 'framer-motion';
import { slideUp } from '../../utils/variants';

const toolbar = (props) => {
  const currentPage = useLocation().pathname.replace('/', '').replace('-', ' ');

  let rightIcon, rightText;
  switch (currentPage) {
    case 'about':
      rightIcon = <RiInformationLine size={23} />;
      rightText = ' ';
      break;
    default:
      rightIcon = <RiMapPinTimeLine size={23} />;
      rightText =
        'Times shown in ' + Intl.DateTimeFormat().resolvedOptions().timeZone + ' Timezone';
  }

  const { onSideDrawerToggle, sideDrawerOpen } = props;

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
            >
              {rightIcon} &nbsp;
              {rightText}
            </motion.span>
          </AnimatePresence>
        </span>
      </nav>
    </header>
  );
};

export default toolbar;
