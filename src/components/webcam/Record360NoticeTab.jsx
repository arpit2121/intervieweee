import React from "react";
import CustomAllTypography from "../typography/CustomTypography";
import useResponsiveStyles from "../../utils/MediaQuery";
import Record360Icon from "../../assets/png/360img.png"
import { useSelector } from "react-redux";

const Record360NoticeTab = () => {
  const responsive = useResponsiveStyles();
  const RecordState = useSelector((state) => state.rootReducer.interviewPage);

  if(RecordState.is360RecordingCompleted === true ){
    return null;
  }
  const ProfileStyle = {
    background: "#FFEBA4",
    borderRadius: "4.15625rem",
    padding: responsive.isMobile
      ? "0.6rem"
      : responsive.isTablet
      ? "0.8rem"
      : responsive.isDesktop
      ? "1.4rem"
      : "1rem",
  };
  const TagStyle = {
    borderRadius: "4.15625rem",
    background: "#FFEBA4",
    display: "flex",
    alignItems: "center",
  };
  const QuestionStyle = {
    display: "flex",
    alignItems: "center",
    paddingRight: "2rem",
  };
  const parent = {
    maxWidth: responsive.isMobile ? "18rem" : responsive.isTablet? "18rem" : responsive.isDesktop? "26rem":"26rem",
    width: "max-content",
    position: "absolute",
    bottom: "1.94rem",
    left: responsive.isMobile ? "50%" : "2.5rem",
    transform: responsive.isMobile ? "translateX(-50%)" : "",
  };
  const variant = 'body2'
  return (
    <div style={parent}>
      <div style={TagStyle}>
        <div style={ProfileStyle}>
            <img src={Record360Icon} />
        </div>
        <div style={QuestionStyle}>
          <CustomAllTypography variant={variant} name={'Capture a comprehensive 360° view of your room to prevent any potential malpractices.'} />
        </div>
      </div>
    </div>
  );
};

export default Record360NoticeTab;