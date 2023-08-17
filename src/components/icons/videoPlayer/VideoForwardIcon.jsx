import React from "react";

const VideoForwardIcon = ({
  onClick = () => {},
  height = 19,
  width = 19,
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
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.9"
        d="M9.30372 0.670654C4.25191 0.670654 0.141937 4.59167 0.141937 9.41121C0.141937 14.2308 4.25191 18.1518 9.30372 18.1518C14.3555 18.1518 18.4655 14.2308 18.4655 9.41121C18.4655 4.59167 14.3555 0.670654 9.30372 0.670654ZM12.9684 12.9074H11.1361V9.41121L5.63901 12.9074V5.91499L11.1361 9.41121V5.91499H12.9684V12.9074Z"
        fill="white"
      />
    </svg>
  );
};
export default VideoForwardIcon;
