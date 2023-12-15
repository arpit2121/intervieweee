import { Slider } from "@mui/material";
import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import useResponsiveStyles from "../../utils/MediaQuery";
import VideoBackIcon from "../icons/videoPlayer/VideoBackIcon";
import VideoForwardIcon from "../icons/videoPlayer/VideoForwardIcon";
import VideoPlayIcon from "../icons/videoPlayer/VideoPlayIcon";
import VolumeIcon from "../icons/videoPlayer/VolumeIcon";
import "./videoPlayer.style.css";
import { Forward5Rounded, Replay5Rounded } from "@mui/icons-material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import VideoPauseIcon from "../icons/videoPlayer/VideoPauseIcon";

const CustomSoundBar = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-root": {
    "@media (pointer: coarse)": {
      padding: "0px !important",
      background: "red",
    },
  },
  "& .MuiSlider-track": {
    backgroundColor: "#F845FC", //color of track
    border: "none",
    // width:'2%',
  },
  "& .MuiSlider-rail": {
    color: "#C4C4C4", ////color of the slider outside teh area between thumbs
  },
}));
const CustomTimeBar = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-root": {
    "@media (pointer: coarse)": {
      padding: "0px",
    },
    padding: "0px !important",
  },
  "& .MuiSlider-track": {
    backgroundColor: "#AA55FF", //color of track
    border: "none",
  },
  "& .MuiSlider-rail": {
    color: "#FFFFFF", ////color of the slider outside teh area between thumbs
  },
  "& .Mui-active": {
    background: "red", ////color of the slider outside teh area between thumbs
  },
}));
const VideoPlayer = forwardRef(({ dynamicDimensions }, ref) => {
  const [playing, setPlaying] = useState(false);
  const [play, setPlay] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControlers, setShowControllers] = useState(true);
  const [showBackArrow, setShowBackArrow] = useState(false);
  const [showFwdArrow, setShowFwdArrow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [drag, setDrag] = useState(false);
  const [volume, setVolume] = useState(100);
  const [volumeIconType, setVolumeIconType] = useState("default");
  const responsive = useResponsiveStyles();
  const vid = document.getElementById("video1");

  const videoRef = ref.previewRef;

  let enterTimeOut;
  let exitTimeOut;
  const fastForward = () => {
    if (enterTimeOut) clearTimeout(enterTimeOut);
    setShowFwdArrow(true);
    videoRef.current.currentTime += 5;
    enterTimeOut = setTimeout(() => {
      setShowFwdArrow(false);
    }, 1000);
  };

  const revert = () => {
    if (exitTimeOut) clearTimeout(exitTimeOut);
    setShowBackArrow(true);
    videoRef.current.currentTime -= 5;
    exitTimeOut = setTimeout(() => {
      setShowBackArrow(false);
    }, 1000);
  };
  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };
  const interval = "";
  useEffect(() => {
    setInterval(function () {
      if (videoRef.current?.currentTime == videoTime) clearInterval();
      setCurrentTime(videoRef.current?.currentTime);
    }, 1000);
  }, []);

  useEffect(() => {
    !drag && setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, [currentTime, drag]);

  useEffect(() => {
    if (!playing) setPlay(true);
    else setPlay(false);
  }, [playing]);

  const handleVolumeChange = (vol) => {
    setVolume(vol.target.value);
    setVolumeIconType(
      vol.target.value == 0
        ? "mute"
        : vol.target.value < 50
        ? "lowSound"
        : "default"
    );
    videoRef.current.volume = vol.target.value / 100;
  };
  const handleTimerDrag = (vol) => {
    setDrag(true);
    if (!videoTime) setVideoTime(vid.duration);
    setProgress(vol.target.value);
    videoRef.current.currentTime = (vid.duration * progress) / 100;
    setCurrentTime((vid.duration * progress) / 100);
  };

  const onVideoMouseEnter = () => {
    setShowControllers(true);
  };
  const onVideoMouseLeave = () => {
    if (!play) setShowControllers(false);
  };
  const onClickVolume = () => {
    if (volume == 0) {
      setVolume(100);
      setVolumeIconType("default");
      videoRef.current.volume = 100;
    } else {
      setVolume(0);
      setVolumeIconType("mute");
      videoRef.current.volume = 0;
    }
  };
  const onFullScreen = () => {
    videoRef.current.requestFullscreen();
  };

  useEffect(()=>{
    setTimeout(()=>{
      // if(document.getElementById("video1")?.duration!='Infinity'){
        setVideoTime(document.getElementById("video1")?.duration)
      // }
    },5000)
  },[])


  return (
    <div
      onMouseEnter={onVideoMouseEnter}
      onMouseLeave={onVideoMouseLeave}
      className="outerDiv"
      // style={{ height: responsive.isMobile ? "11.06rem" : "21.28rem" }}
      style={{
        width: dynamicDimensions().width,
        margin: "auto",
        height: dynamicDimensions().height,
      }}
    >
      <video
        id="video1"
        ref={ref.previewRef}
        autoPlay
        className="video"
      ></video>

      <div
        className="controlsContainer"
        style={{ opacity: showControlers ? 1 : 0 }}
      >
        <div className="progressbarDiv">
          <p className="controlsTime">
            {Math.floor(currentTime / 60) +
              ":" +
              ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </p>

          <CustomTimeBar
            onChangeCommitted={() => setDrag(false)}
            sx={{
              width: "80%",
              padding: "0px !important",
              margin: "0px 6px",
              height: "8px",
            }}
            aria-label="Progress"
            value={progress}
            onChange={handleTimerDrag}
          />
          <p className="controlsTime">
            {Math.floor(videoTime / 60) +
              ":" +
              ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </p>
        </div>
        <div className="controls">
          <span></span>
          <div className="playIcons">
            <VideoBackIcon className="controllerIcon" onClick={revert} />
            {!playing ? (
              <VideoPlayIcon
                className="controllerIcon"
                onClick={() => videoHandler("play")}
              />
            ) : (
              <VideoPauseIcon
                className="controllerIcon"
                onClick={() => videoHandler("pause")}
              />
            )}
            <VideoForwardIcon
              className="controllerIcon"
              onClick={fastForward}
            />
          </div>
          <FullscreenIcon
            sx={{ color: "white", cursor: "pointer" }}
            onClick={onFullScreen}
          />
        </div>
      </div>

      <div
        className="volumeController"
        style={{
          opacity: showControlers ? 1 : 0,
          right: responsive.isMobile ? "0.37rem" : "1.37rem",
        }}
      >
        <CustomSoundBar
          sx={{ height: "70%", padding: "0px !important", width: "60%" }}
          orientation="vertical"
          aria-label="Volume"
          value={volume}
          onChange={handleVolumeChange}
        />
        <VolumeIcon
          type={volumeIconType}
          onClick={onClickVolume}
          height={responsive.isMobile ? 12 : 15}
          width={responsive.isMobile ? 12 : 15}
        />
      </div>
      <div className={"timeForwardBackwardDiv"}>
        <div
          className="arrowContainer"
          style={{ opacity: showBackArrow ? 1 : 0 }}
        >
          <Replay5Rounded sx={{ fontSize: "3rem", color: "white" }} />
        </div>
        <div
          className="arrowContainer"
          style={{ opacity: showFwdArrow ? 1 : 0 }}
        >
          <Forward5Rounded sx={{ fontSize: "3rem", color: "white" }} />
        </div>
      </div>
    </div>
  );
});

export default VideoPlayer;
