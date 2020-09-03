import React from 'react';
import { motion } from 'framer-motion';
import { slideUp, stretchIn } from '../../utils/variants';
const drawStroke = {
  animate: {
    opacity: [0, 1, 1, 1, 1, 0],
    pathLength: [0, 1, 1, 1, 1, 0],
    transition: {
      ease: 'backInOut',
      loop: 'Infinity',
      duration: 4,
      delay: 2,
    },
  },
};
const slideLoop = {
  animate: (custom) => ({
    x: [0, custom, 0],
    transition: {
      ease: 'easeInOut',
      loop: 'Infinity',
      duration: 1.5,
      delay: 1,
    },
  }),
};
export default function DevLogo() {
  return (
    <motion.svg
      variants={slideUp}
      transition={{ when: 'beforeChildren' }}
      version="1.1"
      viewBox="0 0 10.583 10.583"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        id="monitor"
        x="1.3393"
        y="1.5861"
        width="7.9047"
        height="5.4745"
        ry=".5628"
        fill="none"
        stroke="#323737"
        strokeWidth=".5"
      />
      <path
        id="stand"
        d="m3.0663 8.3537h4.4507c0.19598 0 0.35375 0.15777 0.35375 0.35375s-0.15777 0.35375-0.35375 0.35375h-4.4507c-0.19598 0-0.35375-0.15777-0.35375-0.35375s0.15777-0.35375 0.35375-0.35375zm1.8416-1.0464h0.76745v1.0602h-0.76745z"
        fill="#323737"
        strokeWidth="1.2571"
      />
      <motion.g
        variants={stretchIn}
        initial="hidden"
        animate="visible"
        transition={{ when: 'beforeChildren', duration: 0.4 }}
      >
        <motion.path
          custom={-0.25}
          variants={slideLoop}
          animate="animate"
          id="left"
          d="M 3.9039243,5.3705673 2.8859486,4.3233083 m 1.0179757,-1.047259 -1.0179757,1.047259"
          stroke="#08b2e3"
          strokeWidth="0.399481"
          strokeLinecap="round"
        />
        <motion.path
          custom={0.25}
          variants={slideLoop}
          animate="animate"
          strokeLinecap="round"
          strokeWidth="0.39948"
          stroke="#08b2e3"
          d="M 6.6879022,5.3705673 7.7058778,4.3233083 M 6.6879022,3.2760493 7.7058778,4.3233083"
          id="right"
        />
      </motion.g>

      <motion.path
        variants={drawStroke}
        animate="animate"
        id="slash"
        d="M 5.8564751,2.8869472 4.7276704,5.7596694"
        stroke="#ab2346"
        strokeLinecap="round"
        strokeWidth="0.399481"
      />
    </motion.svg>
  );
}
