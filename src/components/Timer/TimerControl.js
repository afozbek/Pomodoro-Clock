import React from "react";
import { connect } from "react-redux";

import { resetContent, startStopTimer } from "../../store/actions";

const TimerControl = props => {
  return (
    <div className="timer-control">
      <button id="start_stop" onClick={() => props.startOrStopTimer()}>
        <i className="fas fa-play" />
        <i className="fas fa-pause" />
      </button>
      <button id="reset" onClick={() => props.resetInitialState()}>
        <i className="fas fa-sync" />
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    resetInitialState: () => dispatch(resetContent()),
    startOrStopTimer: () => dispatch(startStopTimer())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TimerControl);
