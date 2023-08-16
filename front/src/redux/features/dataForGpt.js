import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    choiceDataWho: [],
    choiceDataHow: [],
    location: "",
    date: "",
  },
  reducers: {
    insert: (state, action) => {
      state.choiceDataWho = action.payload.choiceDataWho;
      state.choiceDataHow = action.payload.choiceDataHow;
      state.location = action.payload.location;
      state.date = action.payload.date;
    },
  },
});

export const gptAnswerSave = createSlice({
  name: "gptAnswerSave",
  initialState: {
    location: "",
    attractions: [],
    startDate: "",
    endDate: "",
    option1: [],
    option2: [],
  },
  reducers: {
    save: (state, action) => {
      state.location = action.payload.location;
      state.attractions = action.payload.attractions;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.option1 = action.payload.option1;
      state.option2 = action.payload.option2;
    },
    reset: (state, action) => {
      state.location = "";
      state.attractions = [];
      state.startDate = "";
      state.endDate = "";
      state.option1 = [];
      state.option2 = [];
    },
  },
});

// 이미지 url이 포함된 gpt답변이다. 관광지의 이름과 위도경도,이미지,디테일이 들어간다.
export const attractionsWithImg = createSlice({
  name: "attractionsWithImg",
  initialState: [],
  reducers: {
    saveAttractionsWithImg: (state, action) => {
      state.push({
        attractionLocation: action.payload.attractionLocation,
        detail: action.payload.detail,
        img: action.payload.img,
        name: action.payload.name,
      });
    },
  },
});

export const { insert } = gptSlice.actions;
export const { save, reset } = gptAnswerSave.actions;
export const { saveAttractionsWithImg } = attractionsWithImg.actions;
