import React from "react";
import Overlay from "../components/webcam/Overlay";
import Recorder from "../components/webcam/Recorder";
import { styled } from "@mui/material";
import RecordTimer from "../components/webcam/RecordTimer";
import CustomRecordingButton from "../components/webcam/CustomRecordingButton";
import QuestionTab from "../components/webcam/QuestionTab";
import CustomButton from "../components/button/CustomButton";
import ArrowLeftDirection from "../components/icons/Recorder/ArrowLeftDirection";
import RecordInfo from "../components/webcam/RecordInfo";
import CustomLogo from "../components/webcam/CustomLogo";
import useResponsiveStyles from "../utils/MediaQuery";
import { useSelector } from "react-redux";
import SaveAndNextButton from "../components/webcam/SaveAndNextButton";
import RetakeButton from "../components/webcam/RetakeButton";
import ExitPracticeButton from "../components/webcam/ExitPracticeButton";
import Record360NoticeTab from "../components/webcam/Record360NoticeTab";

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
  const responsive = useResponsiveStyles();
  return (
    <InterviewContainer>
      <CustomLogo />
      <RecordTimer/>
      <RecordInfo />
      {/* <Overlay /> */}
      <Recorder />
      <ExitPracticeButton />
      <SaveAndNextButton />
      <RetakeButton/>
      <QuestionContainer responsive={responsive}>
        <Record360NoticeTab/>
        <QuestionTab />
        <CustomRecordingButton />
      </QuestionContainer>
    </InterviewContainer>
  );
};

export default InterviewPage;
