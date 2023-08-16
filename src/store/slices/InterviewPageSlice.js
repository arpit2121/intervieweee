import { createSlice } from "@reduxjs/toolkit";

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
  questions: [
    {
      questionId: 1,
      question: "what is your name ?",
      thinkTime: 1,
      timeToAnswer: 10,
      retake: "Unlimited",
    },
    {
      questionId: 2,
      question: "what is your favorite color?",
      thinkTime: 1,
      timeToAnswer: 15,
      retake: "Unlimited",
    },
    {
      questionId: 1,
      question: "what are your hobbies? Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      thinkTime: 1,
      timeToAnswer: 5,
      retake: "Unlimited",
    },
  ],
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
      state.currentQuestionIndex++;
      state.recordState = "STARTED";
      state.preview = false;
    },
    save360Check: (state, action) => {
      state.check360.record360Blob = action.payload;
      state.is360RecordingCompleted = true;
    },
    examDone: (state) =>{
      state.isAllQuestionsAttempted = true;
    }
  },
});

export const {
  setRecordState,
  togglePreview,
  complete360Recording,
  recordQuestion,
  moveToNextQuestion,
  save360Check,
  examDone
} = interviewPageSlice.actions;

export default interviewPageSlice.reducer;
