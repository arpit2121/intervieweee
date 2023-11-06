import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Countdown from "../components/webcam/Countdown";
import CustomLogo from "../components/webcam/CustomLogo";
import CustomRecordingButton from "../components/webcam/CustomRecordingButton";
import ExitPracticeButton from "../components/webcam/ExitPracticeButton";
import Overlay from "../components/webcam/Overlay";
import QuestionTab from "../components/webcam/QuestionTab";
import Record360NoticeTab from "../components/webcam/Record360NoticeTab";
import RecordInfo from "../components/webcam/RecordInfo";
import RecordTimer from "../components/webcam/RecordTimer";
import Recorder from "../components/webcam/Recorder";
import RetakeButton from "../components/webcam/RetakeButton";
import SaveAndNextButton from "../components/webcam/SaveAndNextButton";
import useResponsiveStyles from "../utils/MediaQuery";
import { useDispatch, useSelector } from "react-redux";
import GetReadyForExam from "./GetReadyForExam";
import { fetchQuestionAction, is360Complete } from "../store/slices/interviewee/actions";
import CounterComponent from "../components/CounterComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { setRecordState } from "../store/slices/InterviewPageSlice";

const InterviewContainer = styled("div")(({ theme, counterVisible }) => ({
  height: "100%",
  width: "100%",
  opacity: counterVisible?'50%':'100%'
}));

const QuestionContainer = styled("div")(({ theme, responsive }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: responsive.isMobile ? "15rem" : "10rem",
  zIndex: 2,
  display: "flex",
}));

const InterviewPage = () => {
  const navigate = useNavigate();
  const dispatch= useDispatch()
  const location= useLocation()
  const { recordState, getReadyFlag,is360RecordingCompleted, counterVisible, question, check360, isAllQuestionsAttempted,practiceMode} = useSelector(
    (state) => state.rootReducer.interviewPage
  );

  console.log("QUES",  parseFloat(question?.nextQuestion?.thinkingTime))

  const thinkTime= practiceMode?10:is360RecordingCompleted? parseFloat(question?.nextQuestion?.thinkingTime): parseFloat(check360?.thinkTime)
  
  // console.log(getReadyFlag);
  const responsive = useResponsiveStyles();

  useEffect(()=>{
    console.log("360 is?", is360RecordingCompleted, recordState)
    const fetchQueFun= async()=>{
      console.log("INSIDE EFFECT OF PAGE",)
      if(is360RecordingCompleted){
        const resFetchQuestion= await dispatch(fetchQuestionAction({intervieweeId:location.pathname.split('/')[4]}))
        console.log("RESS------11", resFetchQuestion)
      }
    }
    if(is360RecordingCompleted===true){
      console.log("360 ", is360RecordingCompleted)
      fetchQueFun()
      // dispatch(setRecordState("OPEN"))
    }
  },[is360RecordingCompleted])

  useEffect(()=>{
    const fetch360= async()=>{
      const is360= await dispatch(is360Complete({intervieweeId: location.pathname.split('/')[4]}))
      console.log("RES  ", is360)
      if(is360.payload.status===401){
        navigate('/session-expired')
      }
    }
    fetch360()
  },[])

  useEffect(()=>{
    console.log("RECORD STATE------>>>>>", recordState)
  },[recordState])

  useEffect(()=>{
    if(isAllQuestionsAttempted===true){
      console.log("ALL ATTEMPTED", isAllQuestionsAttempted)
      sessionStorage.removeItem('tokenCode')
      navigate("/thanks");
    }
  },[isAllQuestionsAttempted])

  return (
    <>
      {getReadyFlag ? (
        <GetReadyForExam />
      ) : (
        <InterviewContainer counterVisible={counterVisible}>
          <CustomLogo />
          <RecordTimer />
          <RecordInfo />
          <Overlay />
          {/* is360RecordingCompleted !== true && is360RecordingCompleted !== false && */}
          {/* {recordState == "OPEN" && is360RecordingCompleted !== true && is360RecordingCompleted !== false &&   <Countdown showCenter />} */}
          {recordState ==="OPEN" && counterVisible && thinkTime !=0 && <CounterComponent count={thinkTime}></CounterComponent>}
          <Recorder />
          <ExitPracticeButton />
          <SaveAndNextButton />
          <RetakeButton />
          {/* <ReactMicComp /> */}
          <QuestionContainer responsive={responsive}>
            <Record360NoticeTab />
            <QuestionTab />
            <CustomRecordingButton /> 
          </QuestionContainer>
        </InterviewContainer>
      )}
    </>
  );
};

export default InterviewPage;
