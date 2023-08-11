import React from "react";
import ProfilePic from './profile-pic.png'
import useResponsiveStyles from "../../../utils/MediaQuery";

const ProfileIcon = ({ onClick }) => {
    const responsive = useResponsiveStyles();
    const ProfileStyle = {
        width:responsive.isMobile ? '2.5rem':'3.3rem',
        height:responsive.isMobile ? '2.5rem':'3.3rem',
        borderRadius:'50%'
    }
  return (
        <img src={ProfilePic} alt="profile-pic" style={ProfileStyle} />
    );
};

export default ProfileIcon;
