import React, { useEffect } from "react";
import { useRecordWebcam } from "react-record-webcam";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";
import useResponsiveStyles from "../../utils/MediaQuery";
import { save360Check } from "../../store/slices/InterviewPageSlice";
import VideoPlayer from "./VideoPlayer";

const useDynamicDimension = () => {
  const dispatch = useDispatch(); 
  const res = useResponsiveStyles();
  const width = res.isMobile ? "18rem" : res.isTablet ? "20rem" : res.isDesktop ? "50rem" : "30rem";
  const height = res.isMobile ? "13rem" : res.isTablet ? "15rem" : res.isDesktop ? "30rem" : "20rem";
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
  borderRadius: '1rem',
}));

// maintain recording states
const useRecordingEffect = (recordWebcam, recordState) => {
  useEffect(() => {
    if(recordState === "STARTED"){
      recordWebcam.open();
    }else if (recordState === "RECORDING") {
      recordWebcam.start();
    } else if (recordState === "RETAKE") {
      recordWebcam.stop();
    } else if (recordState === "STOPPED") {
      recordWebcam.retake();
    }
  }, [recordState]);
};

const useBlobStore = (saveFile, is360RecordingCompleted, preview, recordWebcam) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (preview === false && is360RecordingCompleted === null) {
      console.log("360 file save called !!!!!");
      recordWebcam.open();
      saveFile().then(console.log("savingBlob")).then(blob => {
        dispatch(save360Check(blob));
      });
    }
  },[preview]);
};

const Recorder = (props) => {
  const responsive = useResponsiveStyles();
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const { preview, recordState, is360RecordingCompleted} = useSelector((state) => state.rootReducer.interviewPage);
  useEffect(() => {
    if(preview === null){
      recordWebcam.open();
    }
  }, [preview]);

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
    return blob;
  };

  useRecordingEffect(recordWebcam,recordState);
  useBlobStore(saveFile, is360RecordingCompleted, preview, recordWebcam);

  return (
    <RecorderContainer>
      {preview ? (
        <div style={{ width: "100%", height: "100%", ...responsive.isMobile ? { position: 'relative', textAlign: 'center', top: '8rem' } : { display: "flex", justifyContent: 'center', alignItems: 'center' } }}>
          <PreviewVideo ref={recordWebcam.previewRef} autoPlay controls />
          {/* <VideoPlayer ref={recordWebcam.previewRef}/> */}
        </div>
      ) : (
        <RecorderVideo ref={recordWebcam.webcamRef} autoPlay muted />
      )}
    </RecorderContainer>
  );
};

export default Recorder;
