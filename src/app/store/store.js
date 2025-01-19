"use client";
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count-slice";
import habitsReducer from "./habits-slice";

const store = configureStore({
  reducer: {
    count: countReducer,
    goodHabits: habitsReducer,
  },
});
export default store;
