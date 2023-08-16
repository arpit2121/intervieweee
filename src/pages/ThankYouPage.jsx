import React from "react";
import QuickConnectIcon from "../components/icons/QuickConnectIcon";
import useResponsiveStyles from "../utils/MediaQuery";
import CheckMark from '../assets/png/26435d821b17120368f5234028c86e8d.gif'
import CustomAllTypography from "../components/typography/CustomTypography";

const ThankYouPage = () => {
    const responsive = useResponsiveStyles();
    
    return (
        <div style={{height:'100%'}}>
            <div style={{position:'absolute',width:'100%',...responsive.isMobile?{display:'flex',justifyContent:'center',paddingTop:'1rem'}:{left:'2rem',top:'1rem'}}}>
                <QuickConnectIcon />
            </div>
            <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',...responsive.isMobile ? {padding:'4.81rem 1rem 1rem'} :{justifyContent:'center',paddingTop: '10rem'} }}>
                <img src={CheckMark} alt="" srcSet="" style={{ width: '10.625rem', height: '10.625rem', marginBottom: '1.6rem' }} />
                <CustomAllTypography variant={'h3'} name={`Great job, you're all set!`} style={{ marginBottom: '1.6rem' }} />
                <CustomAllTypography variant={'body1'} name={`Congratulations on successfully completing the video interview!`} style={{ marginBottom: '1.6rem', }} />
                <CustomAllTypography variant={'body1'} name={`We will notify you of the final result shortly.`} style={{ marginBottom: '1.6rem' }} />

            </div>
        </div>
    );
};

export default ThankYouPage;
