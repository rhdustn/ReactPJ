import { createSlice } from "@reduxjs/toolkit";

export const getSavedPlan = createSlice({
  name: "getSavedPlan",
  initialState: {
     savedPlan : ''
  },
  reducers: {
    getSaved: (state, action) => {
        state.savedPlan = action.payload;
    },
  },
});

export const {getSaved} = getSavedPlan.actions;