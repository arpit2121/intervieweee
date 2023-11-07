import { useEffect, useState } from "react";
import { useVoiceVisualizer, VoiceVisualizer } from "react-voice-visualizer";
import { styled } from "@mui/system";
import { useRecordWebcam } from "react-record-webcam";
import { useDispatch } from "react-redux";
import useResponsiveStyles from "../../utils/MediaQuery";

const useDynamicDimension = () => {
  const dispatch = useDispatch(); 
  const res = useResponsiveStyles();
  const width = res.isMobile
    ? "90%"
    : res.isTablet
    ? "20rem"
    : res.isDesktop
    ? "50rem"
    : "30rem";
  const height = res.isMobile
    ? "13rem"
    : res.isTablet
    ? "15rem"
    : res.isDesktop
    ? "30rem"
    : "20rem";
  return { width, height };
};

const RecorderContainer = styled("div")({
  width: "100vw",
  height: "100vh",
});

const RecorderVideo = styled("video")({
  width: "100vw",
  height: "100vh",
  display: "block",
  objectFit: "cover",
  zIndex: -1,
});

const Posenet = () => {
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const preview= useState(null)

  useEffect(() => {
    console.log("PREVIEW IN RECORDER", preview)
    if(preview === null){
      recordWebcam.open();
    }
  }, [preview]);


  return (
    <>
    <RecorderContainer>
      <h1>Hrushi</h1>
    <RecorderVideo ref={recordWebcam.webcamRef} autoPlay muted />
    </RecorderContainer>
    {/* <VoiceVisualizer ref={audioRef} controls={recorderControls} /> */}
      </>
  );

}

export default Posenet;