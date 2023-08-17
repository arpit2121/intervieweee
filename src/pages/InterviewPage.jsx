import { styled } from "@mui/material";
import React from "react";
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
import { useSelector } from "react-redux";
import GetReadyForExam from "./GetReadyForExam";

const InterviewContainer = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
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
  const { recordState, getReadyFlag,is360RecordingCompleted } = useSelector(
    (state) => state.rootReducer.interviewPage
  );
  console.log(getReadyFlag);
  const responsive = useResponsiveStyles();
  return (
    <>
      {getReadyFlag ? (
        <GetReadyForExam />
      ) : (
        <InterviewContainer>
          <CustomLogo />
          <RecordTimer />
          <RecordInfo />
          <Overlay />
          {/* is360RecordingCompleted !== true && is360RecordingCompleted !== false && */}
          {recordState == "STARTED" &&  <Countdown showCenter />}
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
