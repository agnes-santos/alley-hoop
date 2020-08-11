import React from 'react';

// Components
import Status from './Status';
import Score from './Score';

// UI
import './Games.css';
import { motion, AnimatePresence } from 'framer-motion';
import { slideLeftVariants, slideUpVariants } from '../../utils/variants';

const game = (props) => {
  const { game, hTeam, vTeam } = props;

  return (
    <motion.div
      className="card game"
      variants={slideLeftVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={game.gameId}
    >
      <div>
        <img alt={game.hTeam.triCode} className="svg-shadow" height="80" src={hTeam.imgSrc} />
      </div>

      <div className="slideUpContainer score">
        <AnimatePresence initial={false}>
          <motion.div
            variants={slideUpVariants}
            initial="enter"
            animate="center"
            exit="exit"
            key={game.hTeam.triCode + game.hTeam.score}
          >
            <Score isGameActivated={game.isGameActivated} score={game.hTeam.score} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="slideUpContainer status">
        <AnimatePresence initial={false}>
          <motion.div
            variants={slideUpVariants}
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

      <div className="slideUpContainer score">
        <AnimatePresence initial={false}>
          <motion.div
            variants={slideUpVariants}
            initial="enter"
            animate="center"
            exit="exit"
            key={game.vTeam.triCode + game.vTeam.score}
          >
            <Score isGameActivated={game.isGameActivated} score={game.vTeam.score} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div>
        <img alt={game.vTeam.triCode} className="svg-shadow" height="80" src={vTeam.imgSrc} />
      </div>
    </motion.div>
  );
};

export default game;
