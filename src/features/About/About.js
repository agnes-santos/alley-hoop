import React from 'react';
import './About.css';
import SiteLogo from './SiteLogo';
import { RiMapPinTimeLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { VscSync } from 'react-icons/vsc';

// Animation
import { motion } from 'framer-motion';
import { slideUp } from '../../utils/variants';

const slideLeft = {
  hidden: {
    opacity: 0,
    x: '50%',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { when: 'beforeChildren', delay: 1 },
  },
};

const slideDown = {
  hidden: {
    opacity: 0,
    y: '-50%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 1,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};
export default class About extends React.Component {
  componentDidMount() {
    document.title = 'Alley Hoop : About';
  }

  render() {
    return (
      <div className="about">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="visible"
          className="card about-site"
        >
          <modiv className="svg-circle about-image ">
            <motion.div
              variants={slideUp}
              initial="enter"
              animate="center"
              transition={{ when: 'beforeChildren', delay: 1 }}
            >
              <SiteLogo />
            </motion.div>
          </modiv>
          <div className="about-content">
            <motion.div variants={slideLeft} initial="hidden" animate="visible">
              <motion.div variants={slideLeft} className="about-header">
                Alley Hoop shows NBA game scores of the day.
              </motion.div>
              <motion.div variants={slideDown} className="about-details">
                <motion.div variants={slideDown}>
                  <span className="details-icons">
                    <VscSync size={30} />
                  </span>
                  <span className="details-content">
                    Syncs every minute from 6:00 AM - 1:00 PM Singapore Time
                  </span>
                </motion.div>
                <motion.div variants={slideDown}>
                  <span className="details-icons">
                    <RiMapPinTimeLine size={30} />
                  </span>
                  <span className="details-content">
                    Times displayed are shown in user's local time
                  </span>
                </motion.div>
                {/* <motion.div variants={slideDown}>
                  <span className="details-icons">
                    <RiLinkedinBoxLine size={30} />
                  </span>
                  <span className="details-content">
                    Site designed and developed by{' '}
                    <a href="www.linkedin.com/in/agnes-nuguid">Agnes Nuguid</a>
                  </span>
                </motion.div> */}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }
}
