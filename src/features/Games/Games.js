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
    teamLogosLoading: Object.keys(nbaTeams),
    games: [],
    error: null,
  };

  handleLogoOnLoad(team) {
    const { teamLogosLoading } = this.state;
    teamLogosLoading.splice(teamLogosLoading.indexOf(team), 1);
    this.setState({
      teamLogosLoading: teamLogosLoading,
    });
  }

  componentDidMount() {
    // Page title
    document.title = 'Alley Hoop : Games Today';

    // Pre-loads the NBA logos svg
    Object.keys(nbaTeams).forEach((team) => {
      const logo = new Image();
      logo.src = nbaTeams[team].imgSrc;
      logo.onload = () => {
        this.handleLogoOnLoad(team);
      };
    });

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
    const { isLoading, teamLogosLoading, games, error } = this.state;
    if (isLoading || teamLogosLoading.length) {
      return <Loader />;
    } else if (error) {
      return <div>{error}</div>;
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
