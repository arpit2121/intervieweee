import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestionAction } from "./interviewee/actions";

const initialState = {
  recordState: "",
  preview: null,
  recordedVideo: null,
  practiceMode: false,
  is360RecordingCompleted: null,
  isAllQuestionsAttempted: false,
  check360: {
    record360Blob: null,
    thinkTime: 0.5,
    timeToAnswer: 1,
  },
  currentQuestionIndex: 0,
  questionRecords: [],
  retakeCount: 0,
  getReadyFlag:false,
  totalQuestions:5,
  question: {

  }
    // {
    //   questionId: 1,
    //   question: "what is your name ?",
    //   thinkTime: 1,
    //   timeToAnswer: 1,
    //   retake: "Unlimited",
    // }
};

const interviewPageSlice = createSlice({
  name: "interviewPage",
  initialState,
  reducers: {
    setRecordState: (state, action) => {
      state.recordState = action.payload;
    },
    togglePreview: (state, action) => {
      state.preview = action.payload;
    },
    complete360Recording: (state) => {
      state.is360RecordingCompleted = true;
    },
    recordQuestion: (state, action) => {
      const { questionId, record } = action.payload;
      state.questionRecords[questionId] = record;
    },
    moveToNextQuestion: (state) => {
      // state.currentQuestionIndex++;
      state.recordState = "STARTED";
      state.preview = false;
    },
    save360Check: (state, action) => {
      state.check360.record360Blob = action.payload;
      state.is360RecordingCompleted = true;
    },
    examDone: (state) =>{
      state.isAllQuestionsAttempted = true;
    },
    setGetReadyFlag: (state,action) =>{
      state.getReadyFlag = action.payload;
    },
    setPracticeMode: (state,action) =>{
      state.practiceMode = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionAction.fulfilled, (state, action) => {
      console.log("INSIDE SLICE--->", action.payload.data)
      state.question=action.payload.data
    })
  },
});

export const {
  setRecordState,
  togglePreview,
  complete360Recording,
  recordQuestion,
  moveToNextQuestion,
  save360Check,
  setGetReadyFlag,
  examDone,
  setPracticeMode
} = interviewPageSlice.actions;

export default interviewPageSlice.reducer;
