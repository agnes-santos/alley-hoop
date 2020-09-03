import React from 'react';
import './About.css';
import SiteLogo from './SiteLogo';
import DevLogo from './DevLogo';
import { RiMapPinTimeLine, RiLinkedinBoxLine, RiReactjsLine } from 'react-icons/ri';
import { VscSync } from 'react-icons/vsc';
import { SiFirebase, SiInkscape } from 'react-icons/si';
// Animation
import { motion } from 'framer-motion';
import { slideUp, slideX } from '../../utils/variants';

const slideDown = {
  hidden: {
    opacity: 0,
    y: '-50%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
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
      <motion.div
        className="about "
        variants={slideX}
        initial="hidden"
        animate="visible"
        transition={{ when: 'beforeChildren', staggerChildren: 0.4 }}
      >
        <div className="overflow-container">
          <motion.div
            custom={'50%'}
            variants={slideX}
            transition={{ when: 'beforeChildren' }}
            className="card about-site"
          >
            <div className="svg-circle about-image ">
              <motion.div variants={slideUp} transition={{ when: 'beforeChildren' }}>
                <SiteLogo />
              </motion.div>
            </div>
            <div className="about-content">
              <motion.div
                custom={'50%'}
                variants={slideX}
                transition={{ when: 'beforeChildren', delay: 1 }}
              >
                <motion.div
                  custom={'50%'}
                  variants={slideX}
                  transition={{ when: 'beforeChildren' }}
                  className="about-header"
                >
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
                      Times displayed are shown in viewer's local time
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            custom={'-50%'}
            variants={slideX}
            transition={{ when: 'beforeChildren' }}
            className="card about-dev"
          >
            <div className="about-content">
              <motion.div
                custom={'50%'}
                variants={slideX}
                transition={{ when: 'beforeChildren', delay: 1 }}
              >
                <motion.div
                  custom={'-15%'}
                  variants={slideX}
                  transition={{ when: 'beforeChildren' }}
                  className="about-header"
                >
                  <span>
                    Site & looped icons designed & developed by &nbsp;
                    <a href="https://www.linkedin.com/in/agnes-nuguid">Agnes Nuguid</a>
                  </span>
                  <span className="details-icons">
                    <RiLinkedinBoxLine size={30} />
                  </span>
                </motion.div>
                <motion.div variants={slideDown} className="about-details">
                  <motion.div variants={slideDown}>
                    <span className="details-content">Powered by ReactJS</span>
                    <span className="details-icons">
                      <RiReactjsLine size={25} />
                    </span>
                  </motion.div>
                  <motion.div variants={slideDown}>
                    <span className="details-content">Database and site hosted in Firebase</span>
                    <span className="details-icons">
                      <SiFirebase size={25} />
                    </span>
                  </motion.div>
                  <motion.div variants={slideDown}>
                    <span className="details-content">
                      Looped vector graphics designed in Inkscape
                    </span>
                    <span className="details-icons">
                      <SiInkscape size={25} />
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <div className="svg-circle about-image ">
              <motion.div
                style={{ paddingTop: 10 }}
                variants={slideUp}
                transition={{ when: 'beforeChildren' }}
              >
                <DevLogo />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }
}
