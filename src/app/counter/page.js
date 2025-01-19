"use client";

import { Provider } from "react-redux";
import store from "../store/store";
import Counter from "./counter";

function Page() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default Page;
