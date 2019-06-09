import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSync } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon
          icon={!props.timerStarted ? faPlay : faPause}
          size="2x"
        />
      </button>
      <button id="reset" onClick={resetClickHandler}>
        <FontAwesomeIcon
          icon={faSync}
          size="2x"
          spin={props.timerStarted ? true : false}
        />
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
