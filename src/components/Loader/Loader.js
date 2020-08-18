import React from 'react';
import { motion } from 'framer-motion';

const Loader = (props) => {
  return (
    <div className="center-container">
      <motion.svg
        style={{ originX: '25px', originY: '25px' }}
        animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
        transition={{ loop: Infinity, ease: 'easeInOut', duration: 1.5 }}
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 13.229 13.229"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle id="ball" cx="6.6432" cy="6.57" r="6.4942" fill="#ab2346" strokeWidth=".3284" />
        <path
          id="curves"
          d="m1.1118 10.068s2.5708 0.13537 5.5749-1.3183c3.4093-1.6498 4.6961-1.2931 5.2245 1.5388m-8.0167-9.6308s2.067 0.32139 4.6174 2.8129c1.4906 1.4562 4.1276 0.81898 4.1276 0.81898m-12.431 1.3446s7.6518-1.5184 12.781 1.5457m-3.7289-6.6449s5.0641 9.361-3.1089 12.599"
          fill="none"
          stroke="#1e2424"
          strokeLinecap="round"
          strokeWidth=".3284px"
        />
      </motion.svg>
    </div>
  );
};

export default Loader;
