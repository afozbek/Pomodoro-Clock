import React from "react";
import { connect } from "react-redux";

import { resetContent, startStopTimer } from "../../store/actions";

const TimerControl = props => {
  const resetClickHandler = () => {
    let audioEl = document.getElementById("beep");
    audioEl.pause();
    audioEl.currentTime = 0.0;
    props.resetInitialState();
  };

  return (
    <div className="timer-control">
      <button id="start_stop" onClick={() => props.startOrStopTimer()}>
        <i className="fas fa-play" />
        <i className="fas fa-pause" />
      </button>
      <button id="reset" onClick={resetClickHandler}>
        <i className="fas fa-sync" />
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  timerStarted: state.timerStarted
});

const mapDispatchToProps = dispatch => {
  return {
    resetInitialState: () => dispatch(resetContent()),
    startOrStopTimer: () => dispatch(startStopTimer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerControl);
