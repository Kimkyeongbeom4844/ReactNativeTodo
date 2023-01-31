import { configureStore } from "@reduxjs/toolkit";
import workListReducer from "./workListReducer";

export const store = configureStore({
  reducer: {
    workListReducer: workListReducer, // == workListReducer
  },
});
