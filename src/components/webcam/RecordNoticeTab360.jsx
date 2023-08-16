import { styled } from "@mui/material";
import React from "react";
import CustomAllTypography from "../typography/CustomTypography";
import ProfileIcon from "../icons/QuestionTab/ProfileIcon";
import useResponsiveStyles from "../../utils/MediaQuery";
import Record360Icon from "../icons/QuestionTab/Record360Icon";

const TotalQuestions = 1;
const SelectedQuestion = 1;

const RecordNoticeTab360 = () => {
  const responsive = useResponsiveStyles();

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
            <Record360Icon color="red"/>
        </div>
        <div style={QuestionStyle}>
          <CustomAllTypography variant={variant} name={'Capture a comprehensive 360° view of your room to prevent any potential malpractices.'} />
        </div>
      </div>
    </div>
  );
};

export default RecordNoticeTab360;