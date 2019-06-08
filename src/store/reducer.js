import {
  INCREMENT_LENGTH,
  DECREMENT_LENGTH,
  RESET_CONTENT,
  CALCULATE_REMAINING
} from "./action-types";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
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

const calculateRemaining = (state, action) => {
  // TODO
};

export default rootReducer;
