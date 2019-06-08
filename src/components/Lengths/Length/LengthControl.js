import React, { useState } from "react";

import * as actions from "../../../store/actions";

import { connect } from "react-redux";

const LengthControl = props => {
  const [length, setLength] = useState(props.length);

  const decrementClickHandler = () => {
    if (length !== 1) {
      setLength(length - 1);
    }
  };

  const incrementClickHandler = () => {
    if (length !== 60) {
      setLength(length + 1);
    }
  };

  return (
    <div className="lengths__length__controls">
      <button id={props.decrementId} onClick={decrementClickHandler}>
        <i className="fas fa-arrow-circle-down" />
      </button>
      <div id={props.lengthId}>{length}</div>
      <button id={props.incrementId} onClick={incrementClickHandler}>
        <i className="fas fa-arrow-circle-up" />
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const maptDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  maptDispatchToProps
)(LengthControl);
