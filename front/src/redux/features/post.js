import { createSlice } from "@reduxjs/toolkit";

export const BoardDetailSlice = createSlice({
    name:"boardHandler",
    initialState: { 
        title: "",
        detail:"",
        nickname: "",
        images:[],
    },
    reducers:{
        create:(state,action)=>{
            state.title = action.payload.title;
            state.detail = action.payload.detail;
            state.nickname = action.payload.nickname;
            state.images = action.payload.images
        }
    }
})
export const { create } = BoardDetailSlice.actions;
export default BoardDetailSlice.reducer;