import React from "react";
import useResponsiveStyles from "../../utils/MediaQuery";
import { CustomInputButton } from "../button/CustomButton";
import ArrowLeftDirection from "../icons/Recorder/ArrowLeftDirection";
import { useDispatch, useSelector } from "react-redux";
import { setPracticeMode } from "../../store/slices/InterviewPageSlice";
import { useNavigate } from "react-router-dom";

const ExitPracticeButton = (props) => {
  const RecordState = useSelector((state) => state.rootReducer.interviewPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responsive = useResponsiveStyles();
  const ButtonStyle = {
    zIndex: 4,
    position: "absolute",
    padding: responsive.isMobile ? "0.5rem 1.5rem" : "0.88rem 2rem",
    top: responsive.isMobile ? "1.4rem" : "",
    bottom: responsive.isDesktop
      ? "2.75rem"
      : responsive.isTablet
      ? "2.5rem"
      : responsive.isMobile
      ? ""
      : "2.5rem",
    right: responsive.isMobile ? "1rem" : "1.69rem",
    borderRadius: "0.25rem",
  };

  return RecordState.practiceMode && RecordState.recordState !== "STOPPED" ? (
    <CustomInputButton
      size="extra-small"
      startIcon={<ArrowLeftDirection />}
      style={ButtonStyle}
      onClick={() => {
        dispatch(setPracticeMode(false));
        navigate("/interviewDetails");
      }}
    >
      Exit Practice mode
    </CustomInputButton>
  ) : null;
};

export default ExitPracticeButton;
