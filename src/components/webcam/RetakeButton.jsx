import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomInputButton } from "../button/CustomButton";
import ReplayArrowIcon from "../icons/recorder/ReplayArrowIcon";
import useResponsiveStyles from "../../utils/MediaQuery";
import { setRecordState, setRetakeCount, togglePreview } from "../../store/slices/InterviewPageSlice";

const RetakeButton = () => {
  const responsive = useResponsiveStyles();
  const {recordState, retakeCount, question, is360RecordingCompleted} = useSelector((state) => state.rootReducer.interviewPage);
  const dispatch = useDispatch();

  const buttonStyle = {
    zIndex: 3,
    position: "absolute",
    top: responsive.isMobile ? "1.44rem" :  "1.44rem",
    right:responsive.isMobile ? "1rem" : "1rem",
    background: "#E8E6F8",
    color: "rgba(96, 93, 236, 1)",
  };

  const handleClick =()=>{
    if(is360RecordingCompleted){
      dispatch(setRetakeCount())
    }
    dispatch(setRecordState("RETAKE"));
    //dispatch(setRecordState("OPEN"));
    // const recordingTimeout = setTimeout(() => {
    //   dispatch(togglePreview(false));
    //   dispatch(setRecordState("STOPPED"));
    // });
    // return () => {
    //   clearTimeout(recordingTimeout);
    // };
  }

  return (
    recordState === 'STOPPED' && (question && retakeCount != question?.nextQuestion?.retakes)?
    <CustomInputButton
      size="extra-small"
      style={buttonStyle}
      startIcon={<ReplayArrowIcon color="rgba(96, 93, 236, 1)" />}
      onClick={handleClick}
    >
      Retake
    </CustomInputButton>
     :""
  );
};

export default RetakeButton;
