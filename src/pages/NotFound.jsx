import React from "react";
import QuickConnectIcon from "../components/icons/QuickConnectIcon";
import useResponsiveStyles from "../utils/MediaQuery";
import Error from '../assets/png/error.gif'
import CustomAllTypography from "../components/typography/CustomTypography";

const NotFound = () => {
    const responsive = useResponsiveStyles();
    
    return (
        <div style={{height:'100%'}}>
            <div style={{position:'absolute',width:'100%',...responsive.isMobile?{display:'flex',justifyContent:'center',paddingTop:'1rem'}:{left:'2rem',top:'1rem'}}}>
                <QuickConnectIcon />
            </div>
            <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',...responsive.isMobile ? {padding:'4.81rem 1rem 1rem'} :{justifyContent:'center',paddingTop: '10rem'} }}>
                <img src={Error} alt="" srcSet="" style={{ width: '10.625rem', height: '10.625rem', marginBottom: '1.6rem' }} />
                <CustomAllTypography variant={'h3'} name={`Page Not Found`} style={{ marginBottom: '1.6rem' }} />
            </div>
        </div>
    );
};

export default NotFound;
