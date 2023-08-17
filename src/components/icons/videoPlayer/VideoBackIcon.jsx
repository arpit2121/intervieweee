import React from "react";

const VideoBackIcon = ({
  onClick = () => {},
  height = 19,
  width = 20,
  className,
  color = "#25282B",
  style={}
}) => {
  return (
    <svg
    onClick={onClick}
      style={style}
      width={height}
      height={width}
      className={className}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.9"
        d="M10.0616 0.670654C5.00982 0.670654 0.899841 4.59167 0.899841 9.41121C0.899841 14.2308 5.00982 18.1518 10.0616 18.1518C15.1143 18.1518 19.2234 14.2308 19.2234 9.41121C19.2234 4.59167 15.1143 0.670654 10.0616 0.670654ZM13.7263 12.9074L8.22927 9.41121V12.9074H6.39691V5.91499H8.22927V9.41121L13.7263 5.91499V12.9074Z"
        fill="white"
      />
    </svg>
  );
};
export default VideoBackIcon;
