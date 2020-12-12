import React from 'react';
import Loader from '../../components/Loader/Loader';
import nbaTeams from '../../utils/nbaTeams';
import Game from './Game';
import { db } from '../../utils/fb.js';

// Animation
import { motion } from 'framer-motion';
import { stretchIn } from '../../utils/variants';

export default class Games extends React.Component {
  // Loads FB Realtime database
  games = db.ref().child('gamesToday');

  state = {
    isLoading: true,
    games: [],
    error: null,
  };

  componentDidMount() {
    // Page title
    document.title = 'Alley Hoop : Games Today';

    // Sets games to realtime data in firebase
    this.games.on('value', (snap) => {
      this.setState({
        error: null,
        games: snap.val(),
        isLoading: false,
      });
    });
  }

  render() {
    const { isLoading, games, error } = this.state;
    if (isLoading) {
      return <Loader />;
    } else if (error) {
      return <div>{error}</div>;
    } else if (!games) {
      return <div className="no-games">No games scheduled today.</div>;
    } else {
      return (
        <motion.div
          className="games"
          variants={stretchIn}
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.08,
          }}
        >
          {games.map((game) => {
            // SVG logo srcs
            game.hTeam.imgSrc = nbaTeams[game.hTeam.triCode].imgSrc;
            game.vTeam.imgSrc = nbaTeams[game.vTeam.triCode].imgSrc;

            return <Game game={game} key={game.gameId} />;
          })}
        </motion.div>
      );
    }
  }
}
