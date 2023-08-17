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


// // Auth
// const auth = {
//   google_key:"",
//   email:"",
//   contact:"",
//   password:""
// }
// const otpUser = {
//   email : "",
//   otp:"4 - digits"
// }

// // Admin onboard
// const admin = { // roles =>>> job-post,review_interview
//   id:"",
//   isActive: "boolean",
//   registrationDate :"date",
//   contact_no:"",
//   email:"",
//   full_name:"",
//   company_name:"",
//   profession:"",
//   adminType:"free|essentials|professional",
//   applications:"number",
//   rejected:"number",
//   shortlisted:"number"
// }

// const adminTypes = {
//    free:{
//     jobPost:"1",
//     interviewPerMonth:"10",
//     download:false,
//     branding:false,
//     invitations:"2 in number",
//     recordingBackup:"30 in days",
//    },
//    essentials:{
//     jobPost:"5",
//     interviewPerMonth:"50",
//     download:true,
//     branding:true,
//     invitations:"6 in number",
//     recordingBackup:"60 in days",
//    },
//    professional:{
//     jobPost:"unlimited",
//     interviewPerMonth:"1000",
//     download:true,
//     branding:true,
//     invitations:"20 in number",
//     recordingBackup:"unlimited",
//    }
// }

// // job_post(interview)
// const job_post = {
//   id:"",
//   isActive:"boolean",
//   adminId : "objectId from admin",
//   job_description: "",
//   office_location:" remote||onsite||hybrid",
//   work_experience : "{value} years" || "enum",
//   rating_parameter : [
//     // "string values  - 5 default " 
//     {
//       parameterName:"",
//       requiredPoints:""
//     }
//   ],
//   brand:{
//     color:{
//       primary:"",
//       secondary:""
//     },
//     logo:""
//   },
//   link:{
//     private:"",
//     public:"" // default generate on save of interview(jobPost)
//   },
//   questionToAttempt:"",
//   applications:"number",
//   rejected:"number",
//   shortlisted:"number",
// }

// const user = {
//   id:"",
//   adminId:"",
//   full_name:"",
//   contact_no:"",
//   email:"",
//   currentCompany:"",
//   profession:"",
//   workExperience:"",
//   resume:"file",
//   interviewStatus:"pending|rejected|shortlisted"
// }

// const questionAttempt = {
//   id:"",
//   userId:"",
//   sample360:{
//     videoId:"from s3",
//     retake: "unlimited",
//     question:"tell about your self",
//     videoKey: "from s3"},
//   questions :[
//     {
//       question_id:"",
//       videoKey: "from s3"
//     }
//   ]
// }

// const question_bank = {
//   id:"",
//   jobPostId:"",
//   questions : [
//     {
//       question_id:"",
//       questionTitle:"",
//       recordingDuration:"",
//       questionVideo:"video key stored on s3",
//       timeToAnswer:"",
//       thinkTime:"", 
//       retake:"",
//       isMandatory: "boolean",
//     }
//   ],
// }
