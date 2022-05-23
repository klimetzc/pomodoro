// React Redux Store container

import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import timeReducer from "./reducers/timeReducer";
import taskReduser from "./reducers/taskReduser";

const rootReducer = combineReducers({
  time: timeReducer,
  tasks: taskReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});
