import { createSlice } from "@reduxjs/toolkit";
import { is360Complete } from "./actions";

const initialState = {
  resume:null,
  data:null
};

const intervieweeSlice = createSlice({
  name: "interviewee",
  initialState,
  reducers: {
    setName: (state, action) => {
        state.name = action.payload;
      },
      setResume: (state, action) => {
        console.log("INSIDE SETRESUME",action.payload)
        state.resume = action.payload;
      },
      setIntervieweeData:(state, action) =>{
        state.data = action.payload;
      }
  },
  
});

export const {
  setName,
  setResume,
  setIntervieweeData
} = intervieweeSlice.actions;

export default intervieweeSlice.reducer;
