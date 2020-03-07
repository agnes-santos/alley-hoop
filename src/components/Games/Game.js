import React from 'react';
import './Games.css';
import Status from './Status';

const game = props => {

    return(
        <div 
            className="card game"
        >
            <div>
                <img alt={props.game.hTeam.triCode} 
                    className="svg-shadow" 
                    height="80"
                    src={props.hTeam.imgSrc} 
                />
            </div>

            <div>
                {props.game.isGameActivated && !props.game.hTeam.score 
                    ? '-' 
                    : props.game.hTeam.score}
            </div>

            <div><Status game={props.game}/></div>

            <div>
                {props.game.isGameActivated && !props.game.vTeam.score
                    ? '-' 
                    : props.game.vTeam.score}
            </div>
            
            <div>
                <img alt={props.game.vTeam.triCode} 
                    className="svg-shadow" 
                    height="80"
                    src={props.vTeam.imgSrc} 
                />
            </div>
        </div>
    );
}

export default game;