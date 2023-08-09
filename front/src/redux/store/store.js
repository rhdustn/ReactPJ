import { configureStore } from "@reduxjs/toolkit";
import { gptSlice } from "../features/dataForGpt";
const store = configureStore({
  reducer: {
    gptSlice: gptSlice.reducer,
  },
});

export { store };
