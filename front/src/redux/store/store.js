import { configureStore } from "@reduxjs/toolkit";
import { gptAnswerSave, gptSlice } from "../features/dataForGpt";

const store = configureStore({
  reducer: {
    gptSlice: gptSlice.reducer,
    gptAnswerSave: gptAnswerSave.reducer
  },
});

export { store };
