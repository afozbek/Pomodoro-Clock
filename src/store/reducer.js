import {
  INCREMENT_LENGTH,
  DECREMENT_LENGTH,
  RESET_CONTENT,
  CALCULATE_REMAINING,
  START_STOP_TIMER
} from "./action-types";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  label: "Session",
  remMinutes: 25,
  remSeconds: 0,
  timerStarted: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_LENGTH:
      return incrementLength(state, action);
    case DECREMENT_LENGTH:
      return decrementLength(state, action);
    case RESET_CONTENT:
      return resetContent(state, action);
    case START_STOP_TIMER:
      return startStopTimer(state, action);
    case CALCULATE_REMAINING:
      return calculateRemaining(state, action);
    default:
      return state;
  }
};

const incrementLength = (state, action) => {
  if (action.payload.isBreak) {
    return {
      ...state,
      breakLength: state.breakLength + action.payload.value
    };
  }
  return {
    ...state,
    sessionLength: state.sessionLength + action.payload.value
  };
};

const decrementLength = (state, action) => {
  if (action.payload.isBreak) {
    return {
      ...state,
      breakLength: state.breakLength - action.payload.value
    };
  }
  return {
    ...state,
    sessionLength: state.sessionLength - action.payload.value
  };
};

const resetContent = (state, action) => {
  return {
    ...initialState
  };
};

const startStopTimer = (state, action) => {
  // TODO
};

const calculateRemaining = (state, action) => {
  // TODO
};

export default rootReducer;
