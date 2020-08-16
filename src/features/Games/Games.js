import React from 'react';

import Loader from '../../components/Loader/Loader';
import nbaTeams from '../../utils/nbaTeams';
import Game from './Game';
import db from '../../utils/db.js';

// Animation
import { motion, AnimatePresence } from 'framer-motion';
import { stretchIn } from '../../utils/variants';

export default class Games extends React.Component {
  constructor(props) {
    super(props);

    // Loads FB Realtime database
    this.games = db.ref().child('gamesToday');

    this.state = {
      isLoading: true,
      teamLogosLoading: [
        'ATL',
        'BKN',
        'BOS',
        'CHA',
        'CHI',
        'CLE',
        'DAL',
        'DEN',
        'DET',
        'GSW',
        'HOU',
        'IND',
        'LAC',
        'LAL',
        'MEM',
        'MIA',
        'MIL',
        'MIN',
        'NOP',
        'NYK',
        'OKC',
        'ORL',
        'PHI',
        'PHX',
        'POR',
        'SAC',
        'SAS',
        'TOR',
        'UTA',
        'WAS',
      ],
      games: [],
      error: null,
    };
  }

  handleLogoOnLoad(team) {
    const { teamLogosLoading } = this.state;
    teamLogosLoading.splice(teamLogosLoading.indexOf(team), 1);
    this.setState({
      teamLogosLoading: teamLogosLoading,
    });
  }

  componentDidMount() {
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
      return (
        <div>
          <Loader />
        </div>
      );
    } else if (error) {
      return <div>{error}</div>;
    } else {
      return (
        <AnimatePresence>
          <motion.div
            className="games"
            variants={stretchIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {games.map((game) => {
              // SVG logo srcs
              game.hTeam.imgSrc = nbaTeams[game.hTeam.triCode].imgSrc;
              game.vTeam.imgSrc = nbaTeams[game.vTeam.triCode].imgSrc;

              return <Game game={game} key={game.gameId} />;
            })}
          </motion.div>
        </AnimatePresence>
      );
    }
  }
}
