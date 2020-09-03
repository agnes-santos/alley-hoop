import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../../utils/variants';
export default function SiteLogo() {
  const ballEntrance = {
    hidden: {
      y: '-100%',
      rotate: 180,
    },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        when: 'beforeChildren',
      },
    },
  };
  const ballLoop = {
    visible: {
      x: [0, 21, 0],
      rotate: [0, 180, 360],
      transition: {
        ease: 'easeInOut',
        loop: 'Infinity',
        duration: 2,
      },
    },
  };
  return (
    <motion.svg
      variants={slideUp}
      transition={{ when: 'beforeChildren', duration: 0.5 }}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g variants={ballEntrance}>
        <motion.circle
          variants={ballLoop}
          id="ball"
          cx="40.363"
          cy="27.944"
          r="19.775"
          fill="#ab2346"
        />
        <motion.path
          variants={ballLoop}
          id="curves"
          d="m23.52 38.595s7.8284 0.41221 16.976-4.0142c10.382-5.0237 14.3-3.9376 15.909 4.6857m-24.412-29.327s6.2943 0.97866 14.06 8.5654c4.539 4.4341 12.569 2.4939 12.569 2.4939m-37.854 4.0946s23.3-4.6238 38.918 4.7068m-11.355-20.234s15.421 28.505-9.467 38.364"
          fill="none"
          stroke="#1e2424"
          strokeLinecap="round"
          strokeWidth="1px"
        />
      </motion.g>
      <path
        id="net"
        d="m50.359 52.247 0.20878-10.653m12.005 10.01s0.48212-7.0711 2.4106-10.285m0.80353 50.301-15.428-22.66 12.214-17.356 7.0711 12.214m3.4414-12.98-22.405 32.747 5.3033 8.3568 11.41-16.392-17.035-23.303m25.392-9.4817s-0.39146 3.9415-1.9285 6.4283c-2.0472 3.3123-8.196 30.856-8.0353 42.427m-27.642-40.016s-0.48212-7.0711-2.4106-10.285m-0.80354 50.301 15.428-22.66-12.214-17.356-7.0711 12.214m-3.4414-12.923 23.048 32.69-5.9462 8.3568-11.41-16.392 17.035-23.303m-25.392-9.4817s0.39146 3.9415 1.9285 6.4283c2.0473 3.3123 8.1961 30.856 8.0353 42.427"
        fill="none"
        stroke="#323737"
        strokeWidth="1"
      />
      <rect
        id="ring"
        x="21.816"
        y="41.19"
        width="56.96"
        height="4.4315"
        ry="2.2157"
        fill="#08b2e3"
        strokeWidth=".43223"
      />
    </motion.svg>
  );
}
