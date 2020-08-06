import React from "react";

import nbaTeams from "../NBAteams/NBAteams";
import "../NBAteams/NBAteams.css";

import Loader from "../Loader/Loader";
import Game from "./Game";

import db from "../db.js";

export default class Games extends React.Component {
  constructor(props) {
    super(props);

    // Loads FB Realtime database
    this.games = db.ref().child("gamesToday");

    this.state = {
      error: null,
      games: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    // Pre-loads the NBA logos svg
    Object.keys(nbaTeams).forEach(function (team) {
      new Image().src = nbaTeams[team];
    });

    // Sets games to realtime data in firebase
    this.games.on("value", (snap) => {
      this.setState({
        error: null,
        games: snap.val(),
        isLoading: false,
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <Loader />
        </div>
      );
    } else if (this.state.error) {
      return <div>{this.state.error}</div>;
    } else {
      return this.state.games.map((game) => {
        return (
          <Game
            game={game}
            hTeam={nbaTeams[game.hTeam.triCode]}
            vTeam={nbaTeams[game.vTeam.triCode]}
            key={game.gameId}
          />
        );
      });
    }
  }
}
