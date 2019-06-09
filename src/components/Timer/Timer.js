import React from "react";
import { connect } from "react-redux";

import { calculateRemaining } from "../../store/actions";

const Timer = props => {
  let newDate = new Date(null);
  newDate.setMinutes(props.remMinutes, props.remSeconds, 0);
  let newDateStr = newDate.toISOString().substr(14, 5);
  console.log(newDateStr);

  return (
    <div className="timer">
      <div className="timer-wrapper">
        <div id="timer-label">{props.label}</div>
        <div id="time-left">{props.timeLeft}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  label: state.label,
  remMinutes: state.remMinutes,
  remSeconds: state.remSeconds
});

// * I must dispatch this event
const mapDispatchToProps = dispatch => ({
  calculateRemaining: payload => dispatch(calculateRemaining(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
