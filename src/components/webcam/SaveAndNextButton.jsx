import React, { useEffect } from "react";
import { CustomInputButton } from "../button/CustomButton.jsx";
import ArrowRightDirection from "../icons/recorder/ArrowRightDirection.jsx";
import useResponsiveStyles from "../../utils/MediaQuery";
import { useDispatch, useSelector } from "react-redux";
import {
  complete360Recording,
  examDone,
  moveToNextQuestion,
  setDefaultRetakeCount,
  setGetReadyFlag,
  setRecordState,
  setRetakeCount,
  togglePreview,
} from "../../store/slices/InterviewPageSlice";
import { useNavigate } from "react-router";
import { fetchQuestionAction } from "../../store/slices/interviewee/actions";
import { useLocation } from "react-router-dom";

const SaveAndNextButton = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responsive = useResponsiveStyles();
  const {
    practiceMode,
    is360RecordingCompleted,
    preview,
    totalQuestions,
    question,
    currentQuestionIndex,
  } = useSelector((state) => state.rootReducer.interviewPage);

  if (practiceMode) {
    return null;
  }

  const ButtonStyle = {
    zIndex: responsive.isMobile?1:4,
    position: "absolute",
    bottom: responsive.isDesktop
      ? "2.75rem"
      : responsive.isTablet
      ? "2.5rem"
      : responsive.isMobile
      ? "15rem"
      : "2.5rem",
    right: responsive.isDesktop
      ? "2.75rem"
      : responsive.isTablet
      ? "2.5rem"
      : responsive.isMobile
      ? "1rem"
      : "2.75rem",
  };

  const is360Completeted = () => {
    dispatch(setGetReadyFlag(true));
  };

  const handleClick = async() => {
    console.log("Clicked save")
    // if (is360Completeted == null) {
    //   is360Completeted();
    // }
    // console.log(
    //   "question attempted ===> ",
    //   questions.length,
    //   currentQuestionIndex
    // );
    if (question.questionId === totalQuestions) {
      console.log("hello");
      dispatch(examDone());
      navigate("/thanks");
    }


    if (is360RecordingCompleted !== true) {
      console.log("save is360RecordingCompleted clicked !!! 45");
      dispatch(setDefaultRetakeCount())
      dispatch(togglePreview(false));
      // dispatch(complete360Recording())
      // dispatch(setGetReadyFlag(true));
    } else {
      console.log("save and next clicked !!! 22");
      dispatch(setDefaultRetakeCount())
      dispatch(togglePreview(false));
      // await dispatch(moveToNextQuestion())
      // dispatch(fetchQuestionAction({intervieweeId:location.pathname.split('/')[4]}))
      //  dispatch(moveToNextQuestion());
    }
  };

  return (
        !preview && responsive.isMobile ? (
    ""
  ) : (
    <CustomInputButton
      size="medium"
      style={{
        ...ButtonStyle,
        background: preview ? "black" : "#9B9B9D",
        color: "#FFF",
      }}
      endIcon={<ArrowRightDirection />}
      onClick={preview ? handleClick : console.log("Preview is")}
    >
      Save & Next
    </CustomInputButton>
  //   !preview && responsive.isMobile ? (
  //   ""
  // ) : (
  //   <CustomInputButton
  //     size="medium"
  //     style={{
  //       ...ButtonStyle,
  //       background: preview ? "black" : "#9B9B9D",
  //       color: "#FFF",
  //     }}
  //     endIcon={<ArrowRightDirection />}
  //     onClick={preview ? handleClick : console.log("Preview is")}
  //   >
  //     Save & Next
  //   </CustomInputButton>
  )
  )
};

export default SaveAndNextButton;
