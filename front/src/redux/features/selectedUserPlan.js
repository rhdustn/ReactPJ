const { createSlice } = require("@reduxjs/toolkit");

export const selectedUserPlan = createSlice({
  name: "selectedUserPlan",
  initialState: [],
  reducers: {
    pushPlan: (state, action) => {
      const temp = state.some((value) => {
        return Number(value.day) === Number(action.payload.day);
      });
      if (temp) {
        const newTemp = state.map((value) => {
          if (Number(value.day) === Number(action.payload.day)) {
            return { ...value, plan: action.payload.plan };
          }
        });

        state = [...newTemp];
      } else {
        state.push({ day: action.payload.day, plan: action.payload.plan });
      }
    },
  },
});

export const { pushPlan } = selectedUserPlan.actions;
