import React from "react";

const LengthControl = props => {
  return (
    <div className="lengths__length__controls">
      <button id={props.decrementId}>
        <i class="fas fa-arrow-circle-down" />
      </button>
      <div id={props.lengthId}>{props.length}</div>
      <button id={props.incrementId}>
        <i class="fas fa-arrow-circle-up" />
      </button>
    </div>
  );
};

export default LengthControl;
