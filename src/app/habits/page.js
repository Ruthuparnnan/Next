"use client";

import { Provider } from "react-redux";
import store from "../store/store";
import HabitsList from "./habits-list";
import { Typography } from "@mui/material";

function Page() {
  return (
    <Provider store={store}>
      <Typography variant="h3" sx={{ textAlign: "center", my: 2 }}>
        Do it every single day
      </Typography>
      <HabitsList />
    </Provider>
  );
}

export default Page;
