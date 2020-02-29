import React from 'react';
import logo from './logo.svg';
import './App.css';

class Games extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          error: null,
          isLoaded: false,
          games: []
      };
  }

  componentDidMount() {
      fetch('http://data.nba.com/data/5s/json/cms/noseason/scoreboard/20200227/games.json')
          .then (res => res.json())
          .then(
              (result) => {
                  console.log(result.sports_content.games.game);
                  this.setState({
                      isLoaded: true,
                      games: result.sports_content.games.game
                  });
                  
              },
              (error) => {
                  this.setState({
                      isLoaded: true,
                      error
                  });
              }
          )
  }

  render() {

      const { error, isLoaded, games } = this.state;
      if (error) {
          return <div> Error: {error.message}</div>;
      } else if (!isLoaded) {
          return <div>Loading...</div>;
      } else {
          const g = games.map((game, index) => {
              
              return (
                  <div key={game.id}>{game.home.city} {game.home.nickname} - {game.home.score} | {game.visitor.city} {game.visitor.nickname} - {game.visitor.score}</div>
              );
          });
          return g;
      }
      
  }
}


function App() {
  return (
    <div className="App">
      <Games />
    </div>
  );
}

export default App;
