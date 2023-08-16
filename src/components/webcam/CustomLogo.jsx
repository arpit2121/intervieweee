import React from "react";
import useResponsiveStyles from "../../utils/MediaQuery";
import QuickConnectIcon from "../icons/QuickConnectIcon";
import QuickConnectShortIcon from "../icons/QuickConnectShortIcon";

const CustomLogo = () => {
  const responsive = useResponsiveStyles();

  const logoStyle = {
    position: "absolute",
    zIndex: 3,
    left: "2.19rem",
    top: "2.19rem",
  };

  const logoMobileStyle = {
    left: "1.25rem",
    top: "1.95rem",
  };

  return (
    <div style={{ ...logoStyle, ...(responsive.isMobile && logoMobileStyle) }}>
      {responsive.isMobile ? <QuickConnectShortIcon /> : <QuickConnectIcon />}
    </div>
  );
};

export default CustomLogo;
