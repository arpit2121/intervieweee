import React from "react";
import { useSelector } from "react-redux";
import { CustomInputButton } from "../button/CustomButton";
import ReplayArrowIcon from "../icons/recorder/ReplayArrowIcon";
import useResponsiveStyles from "../../utils/MediaQuery";

const RetakeButton = () => {
  const responsive = useResponsiveStyles();
  const RecordState = useSelector((state) => state.rootReducer.interviewPage);

  if (!RecordState.preview) {
    return null; // Return null if not in preview mode
  }

  const buttonStyle = {
    zIndex: 3,
    position: "absolute",
    top: responsive.isMobile ? "8rem" : "8rem",
    background: "#E8E6F8",
    color: "rgba(96, 93, 236, 1)",
  };

  return (
    <CustomInputButton
      size="extra-small"
      style={buttonStyle}
      startIcon={<ReplayArrowIcon color="rgba(96, 93, 236, 1)" />}
    >
      Retake
    </CustomInputButton>
  );
};

export default RetakeButton;
