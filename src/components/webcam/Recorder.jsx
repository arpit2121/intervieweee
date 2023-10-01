import React, { useEffect } from "react";
import { useRecordWebcam } from "react-record-webcam";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";
import useResponsiveStyles from "../../utils/MediaQuery";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import { save360Check } from "../../store/slices/InterviewPageSlice";
import { answerQuestion, save360Action } from "../../store/slices/interviewee/actions";
import axios from "axios";
import config from "../../common/config";

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

const useBlobStore = (saveFile, is360RecordingCompleted, preview, recordWebcam,intervieweeData) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (preview === false && is360RecordingCompleted===true){
      console.log("360 file save called !!!!!");
      recordWebcam.open();
      saveFile().then(console.log("savingBlob")).then(async blob => {
        console.log("USER DATA", intervieweeData)
      const formdata= new FormData()
        formdata.append('json_data',JSON.stringify({ 
          "adminId":intervieweeData?.adminId,
          "jobPostId":intervieweeData?.jobPostId,
          "email":intervieweeData?.email,
          "questionId":"6506ef6f2406b5641aca4af4"
          }))
        formdata.append('file', blob)
        if(blob != null){
        try {
          const response = await axios.post(`${config.interviewService}/v1/interviewee/upload-answer`, formdata, {
          headers: {
         'Content-Type': 'multipart/form-data',
          },
          });
          console.log('File uploaded successfully', response);
          if(response.status===201){
           console.log("SUCCESSFULLY ANSWERS-------")
           
          }
         } catch (error) {
          console.error('Error uploading file', error);
         }
        //dispatch(answerQuestion({data:formdata}))
        // dispatch(save360Check(blob));
        console.log("VIDEO BLOB----->", blob)
        }
        
      });
    }
  },[preview]);
};

const Recorder = (props) => {
  const responsive = useResponsiveStyles();
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const { preview, recordState, is360RecordingCompleted, currentQuestionIndex,question} = useSelector((state) => state.rootReducer.interviewPage);
  const intervieweeData = useSelector((state) => state.rootReducer.interviewee.data);
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
  useBlobStore(saveFile, is360RecordingCompleted, preview, recordWebcam,intervieweeData);

  console.log('recordWebcam.previewRef',recordWebcam)
  return (
    <RecorderContainer>
      {preview ? (
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
