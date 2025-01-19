"use client";
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count-slice";

const store = configureStore({
  reducer: {
    count: countReducer,
  },
});
export default store;
