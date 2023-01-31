import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const workListReducer = createSlice({
  name: "workListReducer",
  initialState,
  reducers: {
    addWorkList: (state, action) => {
      state.push(action.payload);
    },
    removeWorkList: (state, action) => {
      state.splice(action.payload, 1);
    },
    resetWorkList: (state) => {
      return (state = []);
    },
  },
});

export const { addWorkList, removeWorkList, resetWorkList } =
  workListReducer.actions;
export default workListReducer.reducer;
