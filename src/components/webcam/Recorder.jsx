import React, { useEffect } from "react";
import { useRecordWebcam } from "react-record-webcam";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import useResponsiveStyles from "../../utils/MediaQuery";
import VideoPlayer from "../videoPlayer/VideoPlayer";

const useDynamicDimension = () => {
  const res = useResponsiveStyles();
  const width = res.isMobile
    ? "18rem"
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

const PreviewVideo = styled("video")(({ theme }) => ({
  width: useDynamicDimension().width,
  height: useDynamicDimension().height,
  objectFit: "cover",
  zIndex: 1,
  borderRadius: "1rem",
}));

const Recorder = (props) => {
  const responsive = useResponsiveStyles();
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const RecordState = useSelector((state) => state.rootReducer.interviewPage);
  console.log(RecordState.preview, RecordState.recordState);
  useEffect(() => {
    recordWebcam.open();
  }, []);

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  };

  useEffect(() => {
    if (RecordState.recordState === "RECORDING") {
      recordWebcam.start();
    } else if (RecordState.recordState === "RETAKE") {
      recordWebcam.stop();
    } else if (RecordState.recordState === "STOPPED") {
      recordWebcam.retake();
    }
  }, [RecordState.recordState]);

  console.log('recordWebcam.previewRef',recordWebcam)
  return (
    <RecorderContainer>
      {RecordState.preview ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            ...(responsive.isMobile
              ? { position: "relative", textAlign: "center", top: "8rem" }
              : {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }),
          }}
        >
          {/* <PreviewVideo ref={recordWebcam.previewRef} autoPlay controls /> */}
           
          {/* <VideoPlayer dynamicDimensions={ useDynamicDimension} ref={recordWebcam.previewRef} autoPlay /> */}
          <VideoPlayer dynamicDimensions={ useDynamicDimension} ref={recordWebcam} autoPlay controls />
        </div>
      ) : (
        <RecorderVideo ref={recordWebcam.webcamRef} autoPlay muted />
      )}
    </RecorderContainer>
  );
};

export default Recorder;
