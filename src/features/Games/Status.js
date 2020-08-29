import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideUp } from '../../utils/variants';

const status = (props) => {
  const {
    clock,
    gameId,
    isGameActivated,
    period: { isHalftime, isEndOfPeriod, current, maxRegular },
    startTimeUTC,
  } = props;

  if (isGameActivated && current) {
    if (isHalftime) {
      return 'HALFTIME';
    } else if (isEndOfPeriod) {
      return (
        <div>
          <div>END</div>
          <div>OF Q{current}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="quarter">{current <= maxRegular ? 'Q' + current : 'OT'}</div>
          <div className="center-container clock">
            <AnimatePresence initial={false}>
              <motion.div
                variants={slideUp}
                inital="hidden"
                animate="visible"
                exit="exit"
                key={gameId + clock}
              >
                {clock ? clock : '0:00'}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      );
    }
  } else {
    if (current >= maxRegular) {
      return 'FINAL';
    } else {
      return new Date(startTimeUTC).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
  }
};

export default status;
