import React from "react";
import useResponsiveStyles from "../../utils/MediaQuery";
import { CustomInputButton } from "../button/CustomButton";
import ArrowLeftDirection from '../../components/icons/recorder/ArrowLeftDirection'
import { useSelector } from "react-redux";

const CustomExitButton = (props) => {
    const RecordState = useSelector((state) => state.rootReducer.interviewPage);

    const responsive = useResponsiveStyles();
    const ButtonStyle = {
        zIndex: 4,
        position: "absolute",
        top: responsive.isMobile ? "1.4rem" : '',
        bottom: responsive.isDesktop ? '2.75rem' : responsive.isTablet ? '2.5rem' : responsive.isMobile ? '' : '2.5rem',
        right: responsive.isMobile ? "1rem" : "1.69rem",
    };

    return (
        RecordState.preview ? (
            <CustomInputButton
                size="extra-small"
                startIcon={<ArrowLeftDirection />}
                style={ButtonStyle}
            >Exit Practice mode</CustomInputButton>
        ) : null
    );
};

export default CustomExitButton;
