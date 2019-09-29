import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import * as bip from "../../assets/BeepSound.wav";
import { resetContent, startStopTimer } from "../../store/actions";

const TimerControl = props => {
  const resetClickHandler = () => {
    let audio = new Audio(bip);
    audio.pause();
    audio.currentTime = 0.0;
    props.resetInitialState();
  };

  return (
    <div className="m-timerControl">
      <button
        className="a-controlButton -timerControl"
        id="start_stop"
        onClick={() => props.startOrStopTimer()}
      >
        <FontAwesomeIcon
          icon={!props.timerStarted ? faPlay : faPause}
          size="2x"
        />
      </button>
      <button
        className="a-controlButton -timerControl"
        id="reset"
        onClick={resetClickHandler}
      >
        <FontAwesomeIcon
          icon={faRedoAlt}
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
