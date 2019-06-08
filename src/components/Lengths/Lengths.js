import React from "react";

import Length from "./Length/Length";

const Lengths = props => {
  const breakStyle = { marginRight: "39px" };
  return (
    <div className="lengths">
      <Length
        labelId="break-label"
        lengthName="Break Length"
        decrementId="break-decrement"
        lengthId="break-length"
        incrementId="break-increment"
        length={5}
        style={breakStyle}
      />
      <Length
        labelId="session-label"
        lengthName="Session Length"
        decrementId="session-decrement"
        lengthId="session-length"
        incrementId="session-increment"
        length={15}
      />
    </div>
  );
};

export default Lengths;
