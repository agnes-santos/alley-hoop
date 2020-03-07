import React from 'react';

import axios from 'axios';

import nbaTeams from '../NBAteams/NBAteams';
import '../NBAteams/NBAteams.css';

import Loader from '../Loader/Loader';
import Game from './Game';

// import ReactTimeout from 'react-timeout';

export default class Games extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            games: [],
            isLoading: true,
            todayScoreboard: null
        };
    }

    async getToday() {
        console.log("today");
        return axios.get('http://data.nba.net/10s/prod/v3/today.json')
            .then(today => {
                // handle success
                // console.log(today.data.links.todayScoreboard);
                this.setState({
                    todayScoreboard: today.data.links.todayScoreboard
                });
                this.getTodayScoreboard();

            }).catch(error => {
                // console.log('today', error);
                this.setState({
                    error: error.toString()
                });
            });
    }

    async getTodayScoreboard() {
        
        // NBAdate = '20200303';
        // console.log('NBAdate', NBAdate);
        try {
            const todayGames = await axios.get('http://data.nba.com/data/' + this.state.todayScoreboard);
            // handle success
            console.log(todayGames.data.games);
            this.setState({
                error: null,
                games: todayGames.data.games,
                isLoading: false
            });
        }
        catch (error) {
            // Error
            // console.log('errorTodayScore',error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                if(error.response.status === 404 && !this.state.todayScoreboard) {
                    
                    this.getToday();
                
                }
            }
            else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log('error.request', error.request);
                this.setState({
                    error: error.toString() + ' - Try enabling CORS',
                    isLoading: false
                });
            }
            else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                this.setState({
                    error: error.toString(),
                    isLoading: false
                });
            }
            
            return error;
        }
        
    }

     
    componentDidMount() {

        // Pre-loads the NBA logos svg
        Object.keys(nbaTeams).forEach(function(team) {
            new Image().src = nbaTeams[team];
        });
       
        // Gets the scoreboard for the day
        this.getTodayScoreboard();

        // Gets scores every 10s
        // setInterval(() => this.getTodayScoreboard(), 10000);
        
    }

    
    render() {
        if (this.state.isLoading) {

            return <div><Loader /></div>;

        } else if (this.state.error) {
            
            return <div>{this.state.error}</div>;

        } else {
            return (
                this.state.games.map((game) => {

                    return (
                        <Game 
                            game={game} 
                            hTeam={nbaTeams[game.hTeam.triCode]}
                            vTeam={nbaTeams[game.vTeam.triCode]}
                            key={game.gameId}
                        />
                    );
                })
            )
        }
    }
};