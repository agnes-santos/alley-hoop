import React from 'react';

import axios from 'axios';

import './Games.css';
import nbaLogos from '../NBALogos/NBALogos';
import '../NBALogos/NBALogos.css';

export default class Games extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            games: [],
            isLoading: true
        };
    }
       
    componentDidMount() {

        // Pre-loads the NBA logos svg
        Object.keys(nbaLogos).forEach(function(team) {
            new Image().src = nbaLogos[team];
        });
       
        // Gets the 
        axios.get('http://data.nba.net/10s/prod/v3/today.json')
            .then((today) => {
                // handle success
                console.log(today.data.links.todayScoreboard);
                // return today.data.links.todayScoreboard;
                return '/prod/v2/20200303/scoreboard.json'
            }).catch((error) => {
                // console.log(error);
                this.setState({
                    error: error.toString()
                });
            })
            .then((todayScoreboard) => {
                // NBAdate = '20200303';
                // console.log('NBAdate', NBAdate);
                axios.get('http://data.nba.com/data/' + todayScoreboard)
                    .then((todayGames) => {
                        // handle success
                        console.log(todayGames.data.games);
                        this.setState({ 
                            error: null,
                            games: todayGames.data.games,
                            isLoading: false
                        });
                    })
                    .catch((error) => {
                        // handle error
                        console.log(error);
                        this.setState({ 
                            error: error.toString(),
                            isLoading: false
                        });

                    });
            });
    }

    
    render() {
        if (this.state.isLoading) {

            return <div>Loading...</div>;

        } else if (this.state.error) {
            
            return <div>{this.state.error}</div>;

        } else {
            return (
                this.state.games.map((game, index) => {

                    // const status = game.isGameActivated 
                    // 'Q'+ game.period.current + ' - ' + game.clock
                    const localStatTime = new Date(game.startTimeUTC).toLocaleTimeString(
                        [], {hour: '2-digit', minute:'2-digit'}
                    );
                    return (
                        <div key={game.gameId} 
                            className="card game"
                        >
                            <div>
                                <img alt={game.hTeam.triCode} 
                                    className="svg-shadow" 
                                    height="80"
                                    src={nbaLogos[game.hTeam.triCode]} 
                                />
                            </div>
                            <div>{game.hTeam.score}</div>
                            <div>{localStatTime}</div>
                            <div>{game.vTeam.score}</div>
                            <div>
                                <img alt={game.vTeam.triCode} 
                                    className="svg-shadow" 
                                    height="80"
                                    src={nbaLogos[game.vTeam.triCode]} 
                                />
                            </div>
                        </div>
                    );
                })
            )
        }
    }
};