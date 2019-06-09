import React from "react";
import { connect } from "react-redux";

import { calculateRemaining } from "../../store/actions";
import useInterval from "../../hooks/useInterval";

const Timer = props => {
  // newDate.setMinutes(props.remMinutes, props.remSeconds, 0);
  // newDate.toISOString();
  // ! My Time Interval
  useInterval(
    () => {
      props.calculateRemaining({
        remMinutes: props.remMinutes,
        remSeconds: props.remSeconds,
        label: props.label
      });
    },
    props.timerStarted ? 1000 : null
  );
  let style = null;
  if (props.remMinutes === 0 && props.remSeconds < 60) {
    style = { color: "rgb(165,13,13)" };
  }
  return (
    <div className="timer">
      <div className="timer-wrapper" style={style}>
        <div id="timer-label">{props.label}</div>
        <div id="time-left">
          <span>
            {props.remMinutes < 10 ? "0" + props.remMinutes : props.remMinutes}
          </span>
          <span> : </span>
          <span>
            {props.remSeconds < 10 ? "0" + props.remSeconds : props.remSeconds}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  label: state.label,
  remMinutes: state.remMinutes,
  remSeconds: state.remSeconds,
  timerStarted: state.timerStarted
});

// * I must dispatch this event
const mapDispatchToProps = dispatch => ({
  calculateRemaining: payload => dispatch(calculateRemaining(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
