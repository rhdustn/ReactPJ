const { createSlice } = require("@reduxjs/toolkit");

export const userOrGuest = createSlice({
  name: "userOrGuest",
  initialState: {
    isLogin : false,
    isAdmin : false
  },
  reducers: {
    check: (state, action) => {
        const user_id = action.payload;

        state.isLogin = true;
        state.isAdmin = false;

        if(user_id == 'admin1234') {
            state.isAdmin = true;
        }
    },
  },
});

export const { check } = userOrGuest.actions;
