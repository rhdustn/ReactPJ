const { createSlice } = require("@reduxjs/toolkit");

export const userInfoHandler = createSlice({
  name: "userInfo",
  initialState: {
    
  },
  reducers: {
    saveUSer:(state,action)=>{
        return action.payload
    },
    resetUser:(state,action)=>{
return {}
    }
  },
});

export const { saveUSer, resetUser } = userInfoHandler.actions;
