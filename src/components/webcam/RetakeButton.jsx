import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomInputButton } from "../button/CustomButton.jsx";
import ReplayArrowIcon from "../icons/recorder/ReplayArrowIcon.jsx";
import useResponsiveStyles from "../../utils/MediaQuery";
import { setRecordState, setRetakeCount, togglePreview } from "../../store/slices/InterviewPageSlice";

const RetakeButton = () => {
  const responsive = useResponsiveStyles();
  const {recordState, retakeCount, question, is360RecordingCompleted} = useSelector((state) => state.rootReducer.interviewPage);
  const dispatch = useDispatch();

  const buttonStyle = {
    zIndex: 4,
    position: "absolute",
    // top: responsive.isMobile && "1.44rem" ,
    background: "#E8E6F8",
    color: "rgba(96, 93, 236, 1)",
    bottom: responsive.isDesktop
    && "2.75rem"
    || responsive.isTablet
    && "7rem",
    right: responsive.isDesktop
      ? "16rem"
      : responsive.isTablet
      ? "2.5rem"
      : responsive.isMobile
      ? "1rem"
      : "2.75rem",
    top: responsive.isMobile && '1.5rem'
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
    variant="outlined"
      size="medium"
      style={{...buttonStyle,
        padding:'0.8rem'
      }}
      sx={{width:'10.3rem'}}
      startIcon={<ReplayArrowIcon color="rgba(96, 93, 236, 1)" />}
      onClick={handleClick}
    >
      Retake
    </CustomInputButton>
     :""
  );
};

export default RetakeButton;
