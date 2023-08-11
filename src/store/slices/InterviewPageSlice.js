import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recordState: "",
  preview: null,
  recordTime: 3,
  recordedVideo: null,
  practiceMode:false,
  questions:[
    {
      questionId:1,
      question:"what is your name ?",
      thinkTime:30000,
      timeToAnswer:100000,
      retake:"Unlimited"
    },
    {
      questionId:1,
      question:"what is your name ?",
      thinkTime:30000,
      timeToAnswer:100000,
      retake:"Unlimited"
    },
    {
      questionId:1,
      question:"what is your name ?",
      thinkTime:30000,
      timeToAnswer:100000,
      retake:"Unlimited"
    },

  ]
};

const interviewPageSlice = createSlice({
  name: "interviewPage",
  initialState,
  reducers: {
    setRecordState: (state, action) => {
      state.recordState = action.payload;
    },
    togglePreview: (state,action) => {
      state.preview = action.payload;
    },
  },
});

export const { setRecordState, togglePreview } = interviewPageSlice.actions;

export default interviewPageSlice.reducer;
