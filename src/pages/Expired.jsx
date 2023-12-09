import React, { useEffect } from "react";
import QuickConnectIcon from "../components/icons/QuickConnectIcon";
import useResponsiveStyles from "../utils/MediaQuery";
import Error from '../assets/png/Error.png'
import CheckMark from '../assets/png/26435d821b17120368f5234028c86e8d.gif'
import CustomAllTypography from "../components/typography/CustomTypography";
import { useLocation } from "react-router-dom";

const Expired = () => {
    const responsive = useResponsiveStyles();
    const location = useLocation();

    useEffect(()=>{
        console.log("3333",  location)
    },[])
    
    return (
        <div style={{height:'100%'}}>
            <div style={{position:'absolute',width:'100%',...responsive.isMobile?{display:'flex',justifyContent:'center',paddingTop:'1rem'}:{left:'2rem',top:'1rem'}}}>
                <QuickConnectIcon />
            </div>
            <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',...responsive.isMobile ? {padding:'4.81rem 1rem 1rem'} :{justifyContent:'center',paddingTop: '10rem'} }}>
                <img src={Error} alt="" srcSet="" style={{ width: '10.625rem', height: '10.625rem', marginBottom: '1.6rem' }} />
                <CustomAllTypography variant={'h3'} name={`${location.state.message}`} style={{ marginBottom: '1.6rem' }} />
            </div>
        </div>
    );
};

export default Expired;
