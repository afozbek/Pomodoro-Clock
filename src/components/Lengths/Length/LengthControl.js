import React from "react";

import * as actions from "../../../store/actions";

import { connect } from "react-redux";

const VALUE = 1;

const LengthControl = props => {
  const incrementClickHandler = () => {
    if (props.isBreak) {
      if (props.breakLength === 60) return;
      props.incrementClickHandler({
        breakLength: props.breakLength,
        isBreak: true,
        value: VALUE
      });
    } else {
      if (props.sessionLength === 60) return;
      props.incrementClickHandler({
        sessionLength: props.sessionLength,
        isBreak: false,
        value: VALUE
      });
    }
  };

  const decrementClickHandler = () => {
    debugger;
    if (props.isBreak) {
      if (props.breakLength === 1) return;
      props.decrementClickHandler({
        breakLength: props.breakLength,
        isBreak: true,
        value: VALUE
      });
    } else {
      if (props.sessionLength === 1) return;
      props.decrementClickHandler({
        sessionLength: props.sessionLength,
        isBreak: false,
        value: VALUE
      });
    }
  };

  return (
    <div className="lengths__length__controls">
      <button id={props.decrementId} onClick={decrementClickHandler}>
        <i className="fas fa-arrow-circle-down" />
      </button>
      <div id={props.lengthId}>
        {props.isBreak ? props.breakLength : props.sessionLength}
      </div>
      <button id={props.incrementId} onClick={incrementClickHandler}>
        <i className="fas fa-arrow-circle-up" />
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  breakLength: state.breakLength,
  sessionLength: state.sessionLength
});

const mapDispatchToProps = dispatch => ({
  incrementClickHandler: payload => dispatch(actions.incrementLength(payload)),
  decrementClickHandler: payload => dispatch(actions.decrementLength(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LengthControl);
