import React, { useEffect } from "react";
import QuickConnectIcon from "../components/icons/QuickConnectIcon";
import useResponsiveStyles from "../utils/MediaQuery";
import styled from "styled-components";
import { display } from "@mui/system";
import GetReadyPageIcon from "../components/icons/GetReadyPageIcon";
import CustomAllTypography from "../components/typography/CustomTypography";
import Countdown from "../components/webcam/Countdown";
import { useDispatch } from "react-redux";
import {
  complete360Recording,
  setCounterVisible,
  setGetReadyFlag,
  setRecordState,
  togglePreview,
} from "../store/slices/InterviewPageSlice";
import { fetchQuestionAction } from "../store/slices/interviewee/actions";
import { useLocation } from "react-router-dom";
import CustomLogo from "../components/webcam/CustomLogo";

const LogoContainer = styled("div")(({ responsive }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: responsive.isMobile ? "1rem" : "",
  position: responsive.isMobile ? "" : "absolute",
  top: "2.19rem",
  left: "2.19rem",
}));

const ContentContainer = styled("div")(({ responsive }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: responsive.isMobile ? "90%" : "",
  padding: responsive.isMobile ? "1rem" : "",
  gap: "2rem",
}));
const GetReadyForExam = () => {
  const responsive = useResponsiveStyles();
  const dispatch = useDispatch();
  const location= useLocation()

  useEffect(() => {
    // dispatch(complete360Recording(true));
    // dispatch(togglePreview(false));
    // dispatch(setRecordState("OPEN"));
    setTimeout(() => {
      dispatch(setRecordState("OPEN"))
      dispatch(setCounterVisible(true))
      dispatch(setGetReadyFlag(false))
    }, 11000);
  }, []);


  // useEffect(()=>{
  //   const fetchQueFun=async ()=>{
  //     const resFetchQuestion= await dispatch(fetchQuestionAction({intervieweeId:location.pathname.split('/')[4]}))
  //       // console.log("FETCH RES", resFetchQuestion)
  //   }
  //   fetchQueFun()
  // },[])
  
  return (
    <div style={{ overflow: "hidden" }}>
      {/* <LogoContainer responsive={responsive}></LogoContainer>
      <QuickConnectIcon /> */}
      <CustomLogo />
      <ContentContainer responsive={responsive}>
        <Countdown showRocket />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <CustomAllTypography
            variant={"h3"}
            name={"Get ready for some fun!"}
            sx={{
              fontFamily: "Nunito",
              fontSize: "2rem",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "120%",
            }}
          />
          <CustomAllTypography
            variant={"body1"}
            name={`The Interview round is just about to start, and`}
          />
          <CustomAllTypography
            variant={"body1"}
            name={`you've got only 10 seconds left.`}
          />
          <CustomAllTypography
            variant={"body1"}
            name={`Wishing you all the best and may the fun begin! 🚀🎉`}
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default GetReadyForExam;
