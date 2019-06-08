import React from "react";

import Author from "./components/Author/Author";
import Lengths from "./components/Lengths/Lengths";
import Timer from "./components/Timer/Timer";
import TimerControl from "./components/Timer/TimerControl";

const App = () => {
  return (
    <div className="main-wrapper" id="app" style={{ marginTop: "30px" }}>
      <h2 className="title">Pomodoro Clock</h2>

      <Lengths />

      <Timer timerLabel="Session" timeLeft="25:00" />

      <TimerControl />

      <Author
        name="Abdullah Furkan Özbek"
        github="https://github.com/afozbek"
      />
      <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" />
    </div>
  );
};

export default App;
