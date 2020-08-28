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
    game: {
      clock,
      hTeam,
      gameId,
      isGameActivated,
      nugget: { text },
      period,
      startTimeUTC,
      vTeam,
    },
  } = props;

  return (
    <AnimatePresence>
      <motion.div
        className="card game"
        variants={stretchIn}
        exit="exit"
        transition={{
          staggerChildren: 0.08,
        }}
        key={gameId}
      >
        <div className="center-container svg-circle team-logo">
          <img
            rel="preload"
            alt={hTeam.triCode}
            className="svg-shadow"
            height="80"
            src={hTeam.imgSrc}
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
                key={hTeam.triCode + hTeam.score}
                className="score"
              >
                <Score isGameActivated={isGameActivated} nugget={text} score={hTeam.score} />
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
                key={gameId + startTimeUTC + isGameActivated + Object.values(period).toString()}
              >
                <Status
                  clock={clock}
                  gameId={gameId}
                  isGameActivated={isGameActivated}
                  nugget={text}
                  period={period}
                  startTimeUTC={startTimeUTC}
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
                key={vTeam.triCode + vTeam.score}
                className="score"
              >
                <Score isGameActivated={isGameActivated} nugget={text} score={vTeam.score} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="center-container svg-circle team-logo">
          <img
            rel="preload"
            alt={vTeam.triCode}
            className="svg-shadow"
            height="80"
            src={vTeam.imgSrc}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default game;
