import React from 'react';

import axios from 'axios';

import './Games.css';
import nbaLogos from '../NBALogos/NBALogos';

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

        // Gets the 
        axios.get('http://data.nba.net/data/10s/prod/v1/calendar.json')
            .then((calendar) => {
                // handle success
                return calendar.data._internal.pubDateTime.split(' ')[0].replace(/-/g, "");
            })

            .then((NBAdate) => {
                // NBAdate = '20200229';
                // console.log('NBAdate', NBAdate);
                axios.get('http://data.nba.com/data/5s/json/cms/noseason/scoreboard/' + NBAdate + '/games.json')
                    .then((result) => {
                        // handle success
                        // console.log(result.data.sports_content.games.game);
                        this.setState({ 
                            error: null,
                            games: result.data.sports_content.games.game,
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

                    const Home = nbaLogos[game.home.team_key.toLowerCase()];
                    const Visitor = nbaLogos[game.visitor.team_key.toLowerCase()];
                    
                    return (
                        <div key={game.id} 
                            className="card game"
                        >

                            <Home size={80}/>
                            <div>{game.home.score}</div>
                            <div>{game.period_time.period_status}</div>
                            <div>{game.period_time.game_clock}</div>
                            <div>{game.visitor.score}</div>
                            <Visitor size={80} />
                        </div>
                    );
                })
            )
        }
    }
};