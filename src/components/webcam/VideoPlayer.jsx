import React, { useRef, useEffect } from "react";
import { styled } from "@mui/system";

const VideoContainer = styled("div")({
  position: "relative",
  width: "50%",
  height: "50%",
  background:'red'

});

const StyledVideo = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "1rem",
});

const ControlsContainer = styled("div")({
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.5)",
  borderRadius: "0.5rem",
  padding: "5px 10px",
});

const PlayButton = styled("button")({
  background: "none",
  border: "none",
  color: "white",
  fontSize: "1.2rem",
  cursor: "pointer",
  outline: "none",
  marginRight: "10px",
});

const FullscreenButton = styled("button")({
  background: "none",
  border: "none",
  color: "white",
  fontSize: "1.2rem",
  cursor: "pointer",
  outline: "none",
});

const VideoPlayer = ({ videoRef }) => {
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    if (videoRef && videoRef.current && videoRef.current.srcObject) {
      videoPlayerRef.current.srcObject = videoRef.current.srcObject;
    }
  }, [videoRef]);

  const handlePlayPause = () => {
    if (videoPlayerRef.current.paused) {
      videoPlayerRef.current.play();
    } else {
      videoPlayerRef.current.pause();
    }
  };

  const handleFullscreen = () => {
    if (videoPlayerRef.current.requestFullscreen) {
      videoPlayerRef.current.requestFullscreen();
    } else if (videoPlayerRef.current.mozRequestFullScreen) {
      videoPlayerRef.current.mozRequestFullScreen();
    } else if (videoPlayerRef.current.webkitRequestFullscreen) {
      videoPlayerRef.current.webkitRequestFullscreen();
    } else if (videoPlayerRef.current.msRequestFullscreen) {
      videoPlayerRef.current.msRequestFullscreen();
    }
  };

  return (
    <VideoContainer>

      {/* {videoRef.current && videoRef.current.srcObject ? ( */}
        <>
          <StyledVideo ref={videoPlayerRef} controls />
          <ControlsContainer>
            <PlayButton onClick={handlePlayPause}>
              {videoPlayerRef.current && videoPlayerRef.current.paused ? "Play" : "Pause"}
            </PlayButton>
            <FullscreenButton onClick={handleFullscreen}>
              &#x26F6;
            </FullscreenButton>
          </ControlsContainer>
        </>
      {/* ) : null} */}
    </VideoContainer>
  );
};

export default VideoPlayer;
