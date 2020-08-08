import React from "react";
import "./Games.css";
import Status from "./Status";
import Score from "./Score";

const game = (props) => {
  return (
    <div className="card game">
      <div>
        <img
          alt={props.game.hTeam.triCode}
          className="svg-shadow"
          height="80"
          src={props.hTeam.imgSrc}
        />
      </div>

      <div>
        <Score
          isGameActivated={props.game.isGameActivated}
          team={props.game.hTeam}
        />
      </div>

      <div>
        <Status game={props.game} />
      </div>

      <div>
        <Score
          isGameActivated={props.game.isGameActivated}
          team={props.game.vTeam}
        />
      </div>

      <div>
        <img
          alt={props.game.vTeam.triCode}
          className="svg-shadow"
          height="80"
          src={props.vTeam.imgSrc}
        />
      </div>
    </div>
  );
};

export default game;
