import { configureStore } from "@reduxjs/toolkit";
import {
  gptAnswerSave,
  gptSlice, userChoiceSave,
  attractionsWithImg,
} from "../features/dataForGpt";
import { BoardDetailSlice } from "../features/post";
const store = configureStore({
  reducer: {
    gptSlice: gptSlice.reducer,
    gptAnswerSave: gptAnswerSave.reducer,
    attractionsWithImg: attractionsWithImg.reducer,
    userChoiceSave: userChoiceSave.reducer,
    BoardDetailSlice:BoardDetailSlice.reducer
  },
});

export { store };
