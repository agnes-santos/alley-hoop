import React from 'react';

// Components
import Status from './Status';
import Score from './Score';

// UI
import './Games.css';
import { motion, AnimatePresence } from 'framer-motion';
import { stretchIn, slideUp } from '../../utils/variants';

const game = (props) => {
  const { 
    game: { id, timeUTC, status, statusText, homeTeam, awayTeam }
  } = props;

  return (
    <AnimatePresence>
      <motion.div
        className="card game"
        variants={stretchIn}
        exit="exit"
        transition={{ staggerChildren: 0.08 }}
        key={id}
      >
        <div className="center-container svg-circle team-logo">
          <img
            rel="preload"
            alt={homeTeam.triCode}
            className="svg-shadow"
            height="80"
            src={homeTeam.imgSrc}
          />
        </div>

        <div className="details">
          <div className="center-container">
            <AnimatePresence initial={false}>
              <motion.div
                variants={slideUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={homeTeam.triCode + homeTeam.score}
                className="score"
              >
                <Score
                  status={status}
                  score={homeTeam.score} 
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="center-container status">
            <AnimatePresence initial={false}>
              <motion.div
                variants={slideUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={id + statusText}
              >
                <Status
                  id={id}
                  status={status}
                  statusText={statusText}
                  timeUTC={timeUTC}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="center-container">
            <AnimatePresence initial={false}>
              <motion.div
                variants={slideUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={awayTeam.triCode + awayTeam.score}
                className="score"
              >
                <Score
                  status={status}
                  score={awayTeam.score}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="center-container svg-circle team-logo">
          <img
            rel="preload"
            alt={awayTeam.triCode}
            className="svg-shadow"
            height="80"
            src={awayTeam.imgSrc}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default game;
