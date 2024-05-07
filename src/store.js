import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slices/updateValueSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
