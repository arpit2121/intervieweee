import React from "react";
import Overlay from "../components/webcam/Overlay";
import Recorder from "../components/webcam/Recorder";
import { styled } from "@mui/material";
import RecordTimer from "../components/webcam/RecordTimer";
import CustomRecordingButton from "../components/webcam/CustomRecordingButton";
import RecordInfo from "../components/webcam/RecordInfo";
import CustomLogo from "../components/webcam/CustomLogo";
import useResponsiveStyles from "../utils/MediaQuery";
import CustomExitButton from "../components/webcam/CustomExitButton";
import { useSelector } from "react-redux";
import SaveAndNextButton from "../components/webcam/SaveAndNextButton";
import RetakeButton from "../components/webcam/RetakeButton";
import RecordNoticeTab360 from "../components/webcam/RecordNoticeTab360";

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
  const RecordState = useSelector((state) => state.rootReducer.interviewPage);

  const responsive = useResponsiveStyles();
  const allowedTime = RecordState.recordTime;

  return (
    <InterviewContainer>
      <CustomLogo />
      <RecordTimer minutes={allowedTime} />
      <RecordInfo />
      <Overlay />
      <Recorder />
      <CustomExitButton />
      <SaveAndNextButton />
      <RetakeButton/>
      <QuestionContainer responsive={responsive}>
        <RecordNoticeTab360/>
        {/* <QuestionTab /> */}
        <CustomRecordingButton />
      </QuestionContainer>
    </InterviewContainer>
  );
};

export default InterviewPage;
