import React from 'react';

import Loader from '../../components/Loader/Loader';
import nbaTeams from '../../utils/nbaTeams';
import Game from './Game';
// import db from '../../utils/db.js';

// Animation
import { motion, AnimatePresence } from 'framer-motion';
import { stretchIn } from '../../utils/variants';

export default class Games extends React.Component {
  // Loads FB Realtime database
  // games = db.ref().child('gamesToday');

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
    // this.games.on('value', (snap) => {
    //   this.setState({
    //     error: null,
    //     games: snap.val(),
    //     isLoading: false,
    //   });
    // });
    this.setState({
      error: null,
      isLoading: false,
      games: [
        {
          clock: '',
          gameId: '0021901308',
          hTeam: {
            score: '90',
            triCode: 'BOS',
          },
          isGameActivated: false,
          period: {
            current: 4,
            isEndOfPeriod: false,
            isHalftime: false,
            maxRegular: 4,
          },
          startTimeUTC: '2020-08-13T16:00:00.000Z',
          vTeam: {
            score: '96',
            triCode: 'WAS',
          },
        },
        {
          clock: '2:53',
          gameId: '0021901310',
          hTeam: {
            score: '153',
            triCode: 'LAL',
          },
          isGameActivated: false,
          period: {
            current: 4,
            isEndOfPeriod: false,
            isHalftime: false,
            maxRegular: 4,
          },
          startTimeUTC: '2020-08-13T17:30:00.000Z',
          vTeam: {
            score: '51',
            triCode: 'SAC',
          },
        },
        {
          clock: '',
          gameId: '0021901311',
          hTeam: {
            score: '119',
            triCode: 'MEM',
          },
          isGameActivated: false,
          period: {
            current: 4,
            isEndOfPeriod: false,
            isHalftime: false,
            maxRegular: 4,
          },
          startTimeUTC: '2020-08-13T20:00:00.000Z',
          vTeam: {
            score: '106',
            triCode: 'MIL',
          },
        },
        {
          clock: '',
          gameId: '0021901313',
          hTeam: {
            score: '128',
            triCode: 'PHX',
          },
          isGameActivated: false,
          period: {
            current: 4,
            isEndOfPeriod: false,
            isHalftime: false,
            maxRegular: 4,
          },
          startTimeUTC: '2020-08-13T20:00:00.000Z',
          vTeam: {
            score: '102',
            triCode: 'DAL',
          },
        },
        {
          clock: '',
          gameId: '0021901314',
          hTeam: {
            score: '118',
            triCode: 'UTA',
          },
          isGameActivated: false,
          period: {
            current: 4,
            isEndOfPeriod: false,
            isHalftime: false,
            maxRegular: 4,
          },
          startTimeUTC: '2020-08-13T22:30:00.000Z',
          vTeam: {
            score: '112',
            triCode: 'SAS',
          },
        },
        {
          clock: '',
          gameId: '0021901309',
          hTeam: {
            score: '133',
            triCode: 'BKN',
          },
          isGameActivated: false,
          period: {
            current: 4,
            isEndOfPeriod: false,
            isHalftime: false,
            maxRegular: 4,
          },
          startTimeUTC: '2020-08-14T01:00:00.000Z',
          vTeam: {
            score: '134',
            triCode: 'POR',
          },
        },
        {
          clock: '',
          gameId: '0021901312',
          hTeam: {
            score: '133',
            triCode: 'ORL',
          },
          isGameActivated: false,
          period: {
            current: 4,
            isEndOfPeriod: false,
            isHalftime: false,
            maxRegular: 4,
          },
          startTimeUTC: '2020-08-14T01:00:00.000Z',
          vTeam: {
            score: '127',
            triCode: 'NOP',
          },
        },
      ],
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
