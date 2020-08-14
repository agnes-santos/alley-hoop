import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideUpVariants } from '../../utils/variants';

const status = (props) => {
  const {
    game: {
      clock,
      gameId,
      isGameActivated,
      period: { isHalftime, isEndOfPeriod, current, maxRegular },
      startTimeUTC,
    },
  } = props;

  if (isGameActivated && current) {
    if (isHalftime) {
      return 'HALFTIME';
    } else if (isEndOfPeriod) {
      return 'END OF Q' + current;
    } else {
      return (
        <div className="game-quarter">
          <div className="quarter">{current <= maxRegular ? 'Q' + current : 'OT'}</div>
          <div className="center-container clock">
            <AnimatePresence initial={false}>
              <motion.div
                variants={slideUpVariants}
                inital="enter"
                animate="center"
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
