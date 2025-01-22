import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const habitsSlice = createSlice({
  name: "goodHabits",
  initialState: { habits: [], toDos: [], loading: false },
  reducers: {
    addHabit: (state, action) => {
      const newHabit = {
        id: Date.now().toString(),
        title: action.payload.title,
        habit: action.payload.habit,
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabit);
    },
    deleteHabit: (state, action) => {
      return state.habits.filter((habit) => action.payload?.id !== habit.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addHabitAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addHabitAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.habits.push({
          title: action.payload.title,
          habit: action.payload.habit,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
        });
      });
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.toDos.push(...action.payload);
      });
  },
});

export const addHabitAsync = createAsyncThunk(
  "goodHabits/addHabitAsync",
  async (habit) => {
    const data = await new Promise((resolve, reject) =>
      setTimeout(() => resolve(habit), 3000)
    );
    return data;
  }
);

export const fetchTodos = createAsyncThunk("goodHabits/getTodos", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return data?.slice(0, 10);
});

export const getLoading = (state) => state.goodHabits.loading;
export const getHabits = (state) => state.goodHabits.habits;
export const getTodos = (state) => state.goodHabits.toDos;

export const { addHabit, deleteHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
