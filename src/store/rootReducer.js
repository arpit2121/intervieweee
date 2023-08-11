// rootReducer.js
import { combineReducers } from "redux";
import InterviewPageSlice from "./slices/InterviewPageSlice";

const rootReducer = combineReducers({
  interviewPage: InterviewPageSlice,

});

export default rootReducer;