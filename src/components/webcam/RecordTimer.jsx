import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomAllTypography from "../typography/CustomTypography";
import useResponsiveStyles from "../../utils/MediaQuery";
import RecordingDotIcon from "../icons/Recorder/RecordingDotIcon";
import { useDispatch, useSelector } from "react-redux";
import { setRecordState, togglePreview } from "../../store/slices/InterviewPageSlice";

const RecordTimer = () => {
  const dispatch = useDispatch();
  const {
    recordState,
    is360RecordingCompleted,
    practiceMode,
    check360,
    question,
    currentQuestionIndex,
    isAllQuestionsAttempted
  } = useSelector((state) => state.rootReducer.interviewPage);
  if(isAllQuestionsAttempted){
    return null;
  }
  const allowedTime = practiceMode
    ? 1
    : is360RecordingCompleted !== true
      ? check360.timeToAnswer + check360.thinkTime
      : question.timeToAnswer+
      question.thinkTime;

  const responsive = useResponsiveStyles();

  const initialTimeInSeconds = allowedTime * 60;
  const [startTimer, setStartTimer] = useState(false);
  const [time, setTime] = useState(initialTimeInSeconds);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const endTime = currentTime + initialTimeInSeconds * 1000;
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = Math.max(0, endTime - currentTime);
      setTime(Math.floor(remainingTime / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTimeInSeconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (time === 0) {
      dispatch(togglePreview(true));
      dispatch(setRecordState('RETAKE'));
    }
  }, [time]);

  useEffect(() => {
    if (recordState === "RECORDING") {
        setStartTimer(true);
    }
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

  return recordState !== "RETAKE" ? (
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