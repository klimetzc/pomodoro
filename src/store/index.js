// React Redux Store container

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

const rootReducer = combineReducers({});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
