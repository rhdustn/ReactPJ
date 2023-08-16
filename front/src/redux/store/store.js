import { configureStore } from "@reduxjs/toolkit";
import { gptAnswerSave, gptSlice, userChoiceSave } from "../features/dataForGpt";

const store = configureStore({
  reducer: {
    gptSlice: gptSlice.reducer,
    gptAnswerSave: gptAnswerSave.reducer,
    userChoiceSave: userChoiceSave.reducer
  },
});

export { store };
