import React from "react";

const TimerControl = () => {
  return (
    <div className="timer-control">
      <button id="start_stop">
        <i class="fas fa-play" />
        <i class="fas fa-pause" />
      </button>
      <button id="reset">
        <i class="fas fa-sync" />
      </button>
    </div>
  );
};

export default TimerControl;
