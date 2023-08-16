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

export const gptAnswerSave = createSlice({
  name: "gptAnswerSave",
  initialState: {
    location: "",
    attractions: [],
    startDate: "",
    endDate: "",
    option1: [],
    option2: []
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
      state.attractions = []
      state.startDate = ""
      state.endDate = ""
      state.option1 = []
      state.option2 = []
    }
  }
})

export const userChoiceSave = createSlice({
  name: "userChoiceSave",
  initialState: {
    planPerDay : [{
      day : '',
      plan : []
    }]
  },
  reducers : {
    save2: (state, action) => {
      const { day, plan } = action.payload;
      
      if(state.planPerDay.day == '') {
        state.planPerDay.day = day
        state.planPerDay.plan = plan
      }else {
        // 이미 해당 day에 값이 있는지 확인
        const existingDayIndex = state.planPerDay.findIndex(item => item.day === day);
        
        if (existingDayIndex !== -1) {
          // 이미 해당 day에 값이 있는 경우, 해당 day의 plan을 변경
          state.planPerDay[existingDayIndex].plan = plan;
        } else {
          // 해당 day에 값이 없는 경우, 새로운 day 항목 추가
          state.planPerDay.push({ day, plan });
        }
      }
    }
  }
})

export const { insert } = gptSlice.actions;
export const { save, reset } = gptAnswerSave.actions;
export const { save2 } = userChoiceSave.actions;