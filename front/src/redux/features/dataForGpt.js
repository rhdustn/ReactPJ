import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    choiceDataWho: [],
    choiceDataHow: [],
    location: "",
    date:'',
  },
  reducers: {
    insert: (state, action) => {
      state.choiceDataWho = action.payload.choiceDataWho;
      state.choiceDataHow = action.payload.choiceDataHow;
      state.location = action.payload.location;
      state.date=action.payload.date
    },
  },
});

export const { insert } = gptSlice.actions;
