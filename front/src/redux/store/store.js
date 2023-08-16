import { configureStore } from "@reduxjs/toolkit";
import {
  gptAnswerSave,
  gptSlice,
  attractionsWithImg,
} from "../features/dataForGpt";

const store = configureStore({
  reducer: {
    gptSlice: gptSlice.reducer,
    gptAnswerSave: gptAnswerSave.reducer,
    attractionsWithImg: attractionsWithImg.reducer,
  },
});

export { store };
