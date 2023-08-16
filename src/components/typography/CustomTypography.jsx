import React from "react";
import { styled } from "@mui/material";
import useResponsiveStyles from "../../utils/MediaQuery";
import { Typography } from "@mui/material";
import { fontFamily } from "@mui/system";

export const CustomTypography = styled(Typography)(
  ({ theme, responsive, fontStyle }) => ({
    "&.MuiTypography-h1": {
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      fontSize: responsive.isMobile
        ? "1.5rem"
        : responsive.isTablet
          ? "3rem"
          : "3.5rem",
      lineHeight: responsive.isMobile ? "120%" : "110%",
    },
    "&.MuiTypography-h2": {
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      fontSize: responsive.isMobile
        ? "1.25rem"
        : responsive.isTablet
          ? "2rem"
          : "3rem",
      lineHeight: "120%",
    },
    "&.MuiTypography-h3": {
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      fontSize: responsive.isMobile
        ? "1.125rem"
        : responsive.isTablet
          ? "1.5rem"
          : "2rem",
      lineHeight: "120%",
    },
    "&.MuiTypography-h4": {
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      fontSize: responsive.isMobile
        ? "1rem"
        : responsive.isTablet
          ? "1.125rem"
          : "1.5rem",
      lineHeight: "120%",
    },
    "&.MuiTypography-h5": {
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      fontSize: responsive.isMobile
        ? "0.875rem"
        : responsive.isTablet
          ? "1rem"
          : "1.125rem",
      lineHeight: "120%",
    },
    "&.MuiTypography-body1": {
      fontFamily: "Nunito Sans",
      fontWeight: 400,
      fontSize: responsive.isMobile
        ? "1rem"
        : responsive.isTablet
          ? "1rem"
          : "1.125rem",
      lineHeight: responsive.isMobile
        ? "130%"
        : responsive.isTablet
          ? "130%"
          : "140%",
    },
    "&.MuiTypography-body2": {
      fontFamily: "Nunito Sans",
      fontWeight: 400,
      fontSize: responsive.isMobile
        ? "0.875rem"
        : responsive.isTablet
          ? "0.875rem"
          : "1rem",
      lineHeight: responsive.isMobile
        ? "130%"
        : responsive.isTablet
          ? "130%"
          : "140%",
    },

  })
);

const CustomAllTypography = ({ name, variant, sx = {},  fontStyle, textcolor, onClick }) => {
  const responsive = useResponsiveStyles();
  return (
    <CustomTypography
      variant={variant}
      responsive={responsive}
      fontStyle={fontStyle}
      onClick={onClick}
      sx={{ ...sx, color: textcolor, cursor: 'pointer' }}
    >
      {name}
    </CustomTypography>
  );
};

export default CustomAllTypography;