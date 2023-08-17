import { configureStore } from "@reduxjs/toolkit";
import {
  gptAnswerSave,
  gptSlice, userChoiceSave,
  attractionsWithImg,
} from "../features/dataForGpt";

const store = configureStore({
  reducer: {
    gptSlice: gptSlice.reducer,
    gptAnswerSave: gptAnswerSave.reducer,
    attractionsWithImg: attractionsWithImg.reducer,
    userChoiceSave: userChoiceSave.reducer
  },
});

export { store };
