import React from 'react';

const status = (props) => {
  if (props.game.isGameActivated) {
    if (props.game.period.isHalftime) {
      return 'Halftime';
    } else if (props.game.period.isEndOfPeriod) {
      return 'End of Q' + props.game.period.current;
    } else {
      return (
        <div className="game-quarter">
          <div className="quarter">Q{props.game.period.current}</div>
          <div className="clock">{props.game.clock ? props.game.clock : '0:00'}</div>
        </div>
      );
    }
  } else {
    if (props.game.period.current >= props.game.period.maxRegular) {
      return 'Final';
    } else {
      return new Date(props.game.startTimeUTC).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
  }
};

export default status;
