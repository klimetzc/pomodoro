import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

const defaultState = {
  time: 25 * 60,
};

const timeReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "TIME_CHANGE":
      return { ...state };

    default:
      return state;
  }
};
export default timeReduser;
const store = configureStore();
