import React from "react";

const Timer = props => {
  return (
    <div className="timer">
      <div className="timer-wrapper">
        <div id="timer-label">{props.timerLabel}</div>
        <div id="time-left">{props.timeLeft}</div>
      </div>
    </div>
  );
};

export default Timer;
