import React from "react";
import useResponsiveStyles from "../../../utils/MediaQuery";

const RecordingDotIcon = ({onclick}) => {
  const responsive = useResponsiveStyles();
  return (
    <svg
      width={responsive.isMobile? "12" :'18'}
      height={responsive.isMobile? "12" :'18'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="9" fill="#FF1725" />
    </svg>
  );
};

export default RecordingDotIcon;
