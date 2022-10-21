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
    logosLoaded: 0,
  };

  handleLogoOnLoad() {
    let { logosLoaded } = this.state;
    logosLoaded++;
    this.setState({
      logosLoaded: logosLoaded,
    });
  }

  handleLoadLogo(team) {
    const logo = new Image();
    logo.src = nbaTeams[team].imgSrc;
    logo.onload = () => this.handleLogoOnLoad(team);
  }

  componentDidMount() {
    // Page title
    document.title = 'Alley Hoop : Games Today';

    // Pre-loads the NBA logos svg of teams playing
    this.games.once('value').then((snapshot) => {
      snapshot.val().forEach(({ homeTeam, awayTeam }) => {
        this.handleLoadLogo(homeTeam.triCode);
        this.handleLoadLogo(awayTeam.triCode);
      });
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
    const { isLoading, games, error, logosLoaded } = this.state;
    if (isLoading || logosLoaded < games.length * 2) {
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
            game.homeTeam.imgSrc = nbaTeams[game.homeTeam.triCode].imgSrc;
            game.awayTeam.imgSrc = nbaTeams[game.awayTeam.triCode].imgSrc;

            return <Game game={game} key={game.id} />;
          })}
        </motion.div>
      );
    }
  }
}
