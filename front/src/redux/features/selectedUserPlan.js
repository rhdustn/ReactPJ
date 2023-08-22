const { createSlice } = require("@reduxjs/toolkit");

export const selectedUserPlan = createSlice({
  name: "selectedUserPlan",
  initialState: [],
  reducers: {
    pushPlan: (state, action) => {
      state.push({ day: action.payload.day, plan: action.payload.plan });
    },
  },
});

export const { pushPlan } = selectedUserPlan.actions;
