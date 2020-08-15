import React from 'react';

// Components
import Status from './Status';
import Score from './Score';

// UI
import './Games.css';
import { motion, AnimatePresence } from 'framer-motion';
import { stretchIn, slideUp } from '../../utils/variants';

const game = (props) => {
  const { game, hTeam, vTeam } = props;

  return (
    <AnimatePresence>
      <motion.div className="card game" variants={stretchIn} exit="exit" key={game.gameId}>
        <div className="center-container team-logo">
          <img alt={game.hTeam.triCode} className="svg-shadow" height="80" src={hTeam.imgSrc} />
        </div>

        <div className="center-container">
          <AnimatePresence initial={false}>
            <motion.div
              variants={slideUp}
              initial="enter"
              animate="center"
              exit="exit"
              key={game.hTeam.triCode + game.hTeam.score}
              className="score"
            >
              <Score isGameActivated={game.isGameActivated} score={game.hTeam.score} />
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
              key={
                game.gameId +
                game.startTimeUTC +
                game.isGameActivated +
                Object.values(game.period).toString()
              }
            >
              <Status game={game} />
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
              key={game.vTeam.triCode + game.vTeam.score}
              className="score"
            >
              <Score isGameActivated={game.isGameActivated} score={game.vTeam.score} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="center-container team-logo">
          <img alt={game.vTeam.triCode} className="svg-shadow" height="80" src={vTeam.imgSrc} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default game;
