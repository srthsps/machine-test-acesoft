import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  error: "test",
  values: [
    { id: 1, value: 0, error: "" },
    { id: 2, value: 0, error: "" },
    { id: 3, value: 0, error: "" },
    { id: 4, value: 0, error: "" },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < 10) {
        state.value += 1;
        state.error = "";
      } else {
        state.error = "Reached maximum value";
      }
    },
    incrementByIdx: (state, action) => {
      console.log(state.values);
      if (state.value < 10) {
        // let currentItem = state.values.find(
        //   (item) => item.id === action.payload
        // );
        // currentItem.value -= 1;
        // currentItem.error = "";
      } else {
        state.errors[action.payload] = "Reached minimum value";
      }
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1;
        state.error = "";
      } else {
        state.error = "Reached minimum value";
      }
    },
    decreaseByIdx: (state, action) => {
      if (state.value < 10) {
        let currentItem = state.values.find(
          (item) => item.id === action.payload
        );
        currentItem.value -= 1;
        currentItem.error = "";
      } else {
        state.errors[action.payload] = "Reached minimum value";
      }
    },
    reset: (state) => {
      state.value = 0;
      state.error = "";
    },
    test: (state, action) => {
      console.log(action);
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  test,
  incrementByIdx,
  decreaseByIdx,
} = counterSlice.actions;

export default counterSlice.reducer;
