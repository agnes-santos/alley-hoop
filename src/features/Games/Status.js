import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideUp } from '../../utils/variants';

const status = (props) => {
  const {
    id,
    status,
    statusText,
    timeUTC,
  } = props;

  const localTimeString = new Date(timeUTC).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  if(status === 1){
    return localTimeString;
  } else {
    return (
      <div>
        <div className="center-container status-text">
          <AnimatePresence initial={false}>
            <motion.div
              variants={slideUp}
              inital="hidden"
              animate="visible"
              exit="exit"
              key={id + statusText}
            >
              {statusText}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }
};

export default status;
