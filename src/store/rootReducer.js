// rootReducer.js
import { combineReducers } from "redux";
import InterviewPageSlice from "./slices/InterviewPageSlice";
import intervieweeSlice from "./slices/interviewee/intervieweeSlice";

const rootReducer = combineReducers({
  interviewPage: InterviewPageSlice,
  interviewee:intervieweeSlice
});

export default rootReducer;