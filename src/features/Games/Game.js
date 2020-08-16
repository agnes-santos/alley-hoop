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
    game: { clock, hTeam, gameId, isGameActivated, period, startTimeUTC, vTeam },
  } = props;

  return (
    <AnimatePresence>
      <motion.div className="card game" variants={stretchIn} exit="exit" key={gameId}>
        <div className="center-container team-logo">
          <img
            rel="preload"
            alt={hTeam.triCode}
            className="svg-shadow"
            height="80"
            src={hTeam.imgSrc}
          />
        </div>

        <div className="center-container">
          <AnimatePresence initial={false}>
            <motion.div
              variants={slideUp}
              initial="enter"
              animate="center"
              exit="exit"
              key={hTeam.triCode + hTeam.score}
              className="score"
            >
              <Score isGameActivated={isGameActivated} score={hTeam.score} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="center-container status">
          <AnimatePresence initial={false}>
            <motion.div
              variants={slideUp}
              initial="enter"
              animate="center"
              exit="exit"
              key={gameId + startTimeUTC + isGameActivated + Object.values(period).toString()}
            >
              <Status
                clock={clock}
                gameId={gameId}
                isGameActivated={isGameActivated}
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
              initial="enter"
              animate="center"
              exit="exit"
              key={vTeam.triCode + vTeam.score}
              className="score"
            >
              <Score isGameActivated={isGameActivated} score={vTeam.score} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="center-container team-logo">
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
