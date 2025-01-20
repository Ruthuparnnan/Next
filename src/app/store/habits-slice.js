import { createSlice } from "@reduxjs/toolkit";

const habitsSlice = createSlice({
  name: "goodHabits",
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      const newHabit = {
        id: Date.now().toString(),
        title: action.payload.title,
        habit: action.payload.habit,
        createdAt: new Date().toISOString(),
      };
      state.push(newHabit);
    },
    deleteHabit: (state, action) => {
      return state.filter((habit) => action.payload?.id !== habit.id);
    },
  },
});

export const { addHabit, deleteHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
