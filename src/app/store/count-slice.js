"use client";
import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementByValue: (state, action) => state + action.payload,
  },
});

export const { increment, decrement, incrementByValue } = countSlice.actions;
export default countSlice.reducer;
