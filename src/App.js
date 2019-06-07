import React from "react";

import Author from "./components/Author";

const App = () => {
  return (
    <div className="main-wrapper" id="app" style={{ marginTop: "30px" }}>
      <h2 className="title">Pomodoro Clock</h2>
      <div className="lengths">
        <div className="lengths__length" style={{ marginRight: "39px" }}>
          <div id="" break-label>
            Break Length
          </div>
          <div className="lengths__length__controls">
            <button id="break-decrement">
              <i class="fas fa-arrow-circle-down" />
            </button>
            <div id="break-length">5</div>
            <button id="break-increment">
              <i class="fas fa-arrow-circle-up" />
            </button>
          </div>
        </div>
        <div className="lengths__length">
          <div id="session-label">Session Length</div>
          <div className="lengths__length__controls">
            <button id="session-decrement">
              <i class="fas fa-arrow-circle-down" />
            </button>
            <div id="session-length">25</div>
            <button id="session-increment">
              <i class="fas fa-arrow-circle-up" />
            </button>
          </div>
        </div>
      </div>
      <div className="timer-wrapper">
        <div className="timer">
          <div id="timer-label">Session</div>
          <div id="time-left">25:00</div>
        </div>
      </div>
      <div className="timer-control">
        <button id="start_stop">
          <i class="fas fa-play" />
          <i class="fas fa-pause" />
        </button>
        <button id="reset">
          <i class="fas fa-sync" />
        </button>
      </div>
      <Author
        name="Abdullah Furkan Özbek"
        github="https://github.com/afozbek"
      />
      <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" />
    </div>
  );
};

export default App;
