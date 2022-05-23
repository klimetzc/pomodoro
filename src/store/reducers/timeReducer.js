import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "time changer",
  initialState: {
    time: 25 * 60,
  },
  reducers: {
    increment(state) {
      state.time++;
    },
    decrement(state, action) {
      state.time -= action.payload;
    },
    setTime(state, action) {
      state.time = action.payload;
    },
  },
});

export default timeSlice.reducer;
export const { increment, decrement, setTime } = timeSlice.actions;
