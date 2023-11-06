import React, { useEffect } from "react";
import { useRecordWebcam } from "react-record-webcam";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";
import useResponsiveStyles from "../../utils/MediaQuery";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import { complete360Recording, moveToNextQuestion, save360Check, setCounterVisible, setGetReadyFlag, setRecordState, togglePreview } from "../../store/slices/InterviewPageSlice";
import { answerQuestion, fetchQuestionAction, save360Action } from "../../store/slices/interviewee/actions";
import axios from "axios";
import config from "../../common/config";
import CounterComponent from "../CounterComponent";
import { useLocation } from "react-router-dom";

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
    if(recordState === "OPEN"){ // open
      recordWebcam.open();
    }else if (recordState === "STARTED") { // start
      recordWebcam.start();
    } else if (recordState === "STOPPED") {  // stop
      recordWebcam.stop();
    } else if (recordState === "RETAKE") { //retake 
      recordWebcam.retake();
    }
  }, [recordState]);
};

const useBlobStore = (saveFile, recordWebcam,intervieweeData) => {

  const { preview, is360RecordingCompleted, recordState, question, practiceMode} = useSelector((state) => state.rootReducer.interviewPage);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (preview === false && is360RecordingCompleted ===false && recordState==="STOPPED" && practiceMode===false){
      console.log("360 file Will be saved Now=====>>>>>",recordState);

      //recordWebcam.open();
      saveFile().then(console.log("savingBlob")).then(async blob => {
        console.log("USER DATA", intervieweeData)
        console.log("VIDEO BLOB", blob)
      const formdata= new FormData()
        // formdata.append('json_data',JSON.stringify({ 
        //   "adminId":intervieweeData?.adminId,
        //   "jobPostId":intervieweeData?.jobPostId,
        //   "email":intervieweeData?.email,
        //   "questionId":"6506ef6f2406b5641aca4af4"
        //   }))
        formdata.append('file', blob)
        if(blob != null){
        try {
          const paramsData={
            adminId: location.pathname.split('/')[1],
            jobPostId: location.pathname.split('/')[2],
            intervieweeId:location.pathname.split('/')[4]
          }

          console.log("PARAMS", paramsData)
          const response = await axios.post(`${config.interviewService}/v1/interviewee/upload-360`, formdata, {
            params: paramsData,
          headers: {
         'Content-Type': 'multipart/form-data',
         'code': sessionStorage.getItem('tokenCode')
          },
          });
          console.log('File uploaded successfully', response);
          if(response.status===201){
           console.log("SUCCESSFULLY ANSWERS-------")
           dispatch(complete360Recording())
           dispatch(setGetReadyFlag(true));
          //  dispatch(setRecordState("OPEN"))
          //  dispatch(setRecordState("OPEN"))
          }
         } catch (error) {
          console.error('Error uploading file', error);
         }
        }
      });
    }

    if(preview===false && is360RecordingCompleted===true && recordState==="STOPPED"){
      console.log("Now it is answer video")
      saveFile().then(console.log("savingBlob")).then(async blob => {
        console.log("USER DATA", intervieweeData)
        console.log("VIDEO BLOB", blob)
      const formdata= new FormData()
        formdata.append('json_data',JSON.stringify({ 
          "adminId":location.pathname.split('/')[1],
          "jobPostId":location.pathname.split('/')[2],
          "email":intervieweeData?.email,
          "questionId": question.nextQuestion._id,
          "intervieweeId":location.pathname.split('/')[4]
          }))
        formdata.append('file', blob)
        if(blob != null){
        try {
          console.log("DATA----->", location.pathname.split('/')[1], location.pathname.split('/')[2], intervieweeData?.email, question.nextQuestion._id)
          const response = await axios.post(`${config.interviewService}/v1/interviewee/upload-answer`, formdata, {
          headers: {
         'Content-Type': 'multipart/form-data',
         'code': sessionStorage.getItem('tokenCode')
          },
          });
          console.log('File uploaded successfully', response);
          if(response.status===201){
          console.log("SUCCESSFULLY ANSWERS  ;;;;  NEXT QUESTION  ____ RECORD STATE",recordState)
          const resFetchQuestion= await dispatch(fetchQuestionAction({intervieweeId:location.pathname.split('/')[4]}))
          // console.log("FETCH RES", resFetchQuestion)
          dispatch(setRecordState("OPEN"))
          dispatch(setCounterVisible(true))
          //  dispatch(complete360Recording())
          //  dispatch(setGetReadyFlag(true));
          }
         } catch (error) {
          console.error('Error uploading file', error);
         }
        }
      });
    }
  },[preview]);
};

const Recorder = (props) => {
  const responsive = useResponsiveStyles();
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const { preview, recordState, is360RecordingCompleted,counterVisible} = useSelector((state) => state.rootReducer.interviewPage);
  const intervieweeData = useSelector((state) => state.rootReducer.interviewee.data);

  useEffect(() => {
    console.log("PREVIEW IN RECORDER", preview)
    if(preview === null){
      recordWebcam.open();
    }
  }, [preview]);


  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
    return blob;
  };

  useRecordingEffect(recordWebcam,recordState);
  useBlobStore(saveFile,recordWebcam,intervieweeData);

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
