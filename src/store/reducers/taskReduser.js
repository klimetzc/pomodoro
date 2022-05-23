import { createSlice } from "@reduxjs/toolkit";

const taskReducer = createSlice({
  name: "task reducer",
  initialState: {
    taskList: [
      { title: "1 First task", id: 1, order: 1 },
      { title: "2 Second task", id: 2, order: 2 },
      { title: "3 Third task", id: 3, order: 3 },
    ],
  },
  reducers: {
    addTask(state, action) {
      state.taskList.push(action.payload);
    },
    removeTask(state, action) {
      state.taskList = state.taskList.filter((item) => item.id !== action.payload.id);
    },
    sortTask(state, action) {
      state.taskList = action.payload;
    },
  },
});

export default taskReducer.reducer;

export const { addTask, removeTask, sortTask } = taskReducer.actions;
