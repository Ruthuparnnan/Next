import { createSlice } from "@reduxjs/toolkit";

const habitsSlice = createSlice({
  name: "goodHabits",
  initialState: [],
  reducers: {
    addHabit: (state, action) => [...state, action.payload],
  },
});

export const { addHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
