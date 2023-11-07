import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomAllTypography from "../typography/CustomTypography";
import useResponsiveStyles from "../../utils/MediaQuery";
import RecordingDotIcon from "../icons/Recorder/RecordingDotIcon.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCounterVisible, setRecordState, togglePreview } from "../../store/slices/InterviewPageSlice";

const RecordTimer = () => {
  const dispatch = useDispatch();
  const {
    recordState,
    is360RecordingCompleted,
    practiceMode,
    check360,
    question,
    isAllQuestionsAttempted
  } = useSelector((state) => state.rootReducer.interviewPage);
  // if(isAllQuestionsAttempted){
  //   return null;
  // }
  const allowedTime = practiceMode
    ? 10
    : is360RecordingCompleted !== true
      ? check360.timeToAnswer
      : parseFloat(question?.nextQuestion?.timeToAnswer)
  console.log("ALOOWED TIME HERE----", allowedTime)

    const thinkTime= is360RecordingCompleted? parseFloat(question?.nextQuestion?.thinkingTime): parseFloat(check360.thinkTime)
      // + parseFloat(question.thinkingTime);
      // console.log("ALLOWED Time",parseFloat(question.timeToAnswer))

  const responsive = useResponsiveStyles();

  const initialTimeInSeconds = allowedTime * 60;
  const [startTimer, setStartTimer] = useState(false);
  const [time, setTime] = useState(initialTimeInSeconds);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const endTime = currentTime + initialTimeInSeconds * 1000;
    const timer = setInterval(() => {
      if(startTimer){
        const currentTime = new Date().getTime();
        const remainingTime = Math.max(0, endTime - currentTime);
        setTime(Math.floor(remainingTime / 1000));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [startTimer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60 )
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (time === 0) {
      setTime(initialTimeInSeconds)
      dispatch(togglePreview(true));
      dispatch(setRecordState('STOPPED'));
    }
  }, [time]);

  useEffect(() => {
    if (recordState === "STARTED") {
        setStartTimer(true);
    }
    if(recordState === "RETAKE"){
      console.log("TIMER---->", startTimer)
      // setStartTimer(true);
      dispatch(togglePreview(false));
      dispatch(setRecordState("OPEN"))
      dispatch(setCounterVisible(true))
    }
    if(recordState==="STOPPED"){
      setTime(initialTimeInSeconds)
      setStartTimer(false)
    }
    console.log("record state", recordState)
  }, [recordState]);

  const TypoStyle = {
    color: "#FFFF",
    fontSize: responsive.isMobile
      ? "0.8rem"
      : responsive.isTablet
        ? "1rem"
        : "1.4rem",
  };

  const container = {
    zIndex: 3,
    background: "rgba(10, 10, 10, 0.35)",
    width: "max-content",
    borderRadius: "1.25rem",
    position: "absolute",
    padding: "0.25rem 1rem 0.25rem 1rem",
    top: "1.8rem",
    right: "1.5rem",
    display: "flex",
    alignItems: "center",
    columnGap: "0.5rem",
  };

  return recordState !== "STOPPED" ? (
    <div style={container}>
      <RecordingDotIcon />
      {startTimer ? (
        <CustomAllTypography variant={"body1"} fontFamily={"Inter"} name={`Rec : ${formatTime(time)}s`} style={TypoStyle}/>
      ) : (
        <CustomAllTypography variant={"body1"} fontFamily={"Inter"}  name={"Record "}  style={TypoStyle}/>
      )}
    </div>
  ) : (
    ""
  );
};

export default RecordTimer;