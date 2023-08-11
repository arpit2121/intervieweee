import React from "react";
import { CustomInputButton } from "../button/CustomButton";
import ArrowRightDirection from "../icons/recorder/ArrowRightDirection";
import useResponsiveStyles from "../../utils/MediaQuery";
import { useSelector } from "react-redux";

const SaveAndNextButton = () => {
    const responsive = useResponsiveStyles();
    const RecordState = useSelector((state) => state.rootReducer.interviewPage);
    
    if (!RecordState.preview) {
      return null;
    }
    
    const ButtonStyle = {
        zIndex: 4,
        position: "absolute",
        bottom: responsive.isDesktop ? '2.75rem' : responsive.isTablet ? '2.5rem' : responsive.isMobile?'10rem':'2.5rem',
        right: responsive.isDesktop ? '2.75rem' : responsive.isTablet ? '2.5rem' : responsive.isMobile ? "1rem" : "2.75rem",
    };

    return (
      <CustomInputButton
        size="extra-small"
        style={{...ButtonStyle,background:'#9B9B9D',color:'#FFF'}}
        endIcon={<ArrowRightDirection />}
      >
        Save & Next
      </CustomInputButton>
    );
};

export default SaveAndNextButton;
