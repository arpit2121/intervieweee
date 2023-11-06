import { createSlice } from "@reduxjs/toolkit";
import { is360Complete } from "./actions";

const initialState = {
  resume:null,
  data:null,
  loading:false
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
      },
      setLoading:(state, action)=>{
        state.loading= action.payload
      }
  },
  
});

export const {
  setName,
  setResume,
  setIntervieweeData,
  setLoading
} = intervieweeSlice.actions;

export default intervieweeSlice.reducer;
