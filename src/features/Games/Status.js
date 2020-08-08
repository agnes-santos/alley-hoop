import React from 'react';

const status = (props) => {
  const {
    game: {
      clock,
      isGameActivated,
      period: { isHalftime, isEndOfPeriod, current, maxRegular },
      startTimeUTC,
    },
  } = props;

  if (isGameActivated) {
    if (isHalftime) {
      return 'HALFTIME';
    } else if (isEndOfPeriod) {
      return 'END of Q' + current;
    } else {
      return (
        <div className="game-quarter">
          <div className="quarter">Q{current}</div>
          <div className="clock">{clock ? clock : '0:00'}</div>
        </div>
      );
    }
  } else {
    if (current >= maxRegular) {
      return 'FINAL';
    } else {
      return new Date(startTimeUTC).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
  }
};

export default status;
