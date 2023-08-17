import React from "react";

const VideoPlayIcon = ({
  onClick = () => {},
  height = 24,
  width = 24,
  className,
  color = "#25282B",
  style = {},
}) => {
  return (
    <svg
    onClick={onClick}
    style={style}
    width={width}
    height={height}
    className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="white"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 8L16 12L10 16V8Z"
        fill="#25282B"
        stroke="#25282B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default VideoPlayIcon;
