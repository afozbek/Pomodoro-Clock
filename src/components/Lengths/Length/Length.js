import React from "react";

import LengthControl from "./LengthControl";

const Length = props => {
  return (
    <div className="lengths__length" style={props.style ? props.style : null}>
      <div id={props.labelId}>{props.lengthName}</div>
      <LengthControl
        decrementId={props.decrementId}
        lengthId={props.lengthId}
        incrementId={props.incrementId}
        length={props.length}
      />
    </div>
  );
};

export default Length;
