import React from "react";
import { connect } from "react-redux";

const TimerControl = props => {
  return (
    <div className="timer-control">
      <button id="start_stop">
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
  return {};
};

export default connect(
  null,
  mapDispatchToProps
)(TimerControl);
