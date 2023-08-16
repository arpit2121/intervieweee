import React from 'react'
import QuickConnectIcon from '../components/icons/QuickConnectIcon';
import useResponsiveStyles from '../utils/MediaQuery';
import styled from 'styled-components';
import { display } from '@mui/system';
import GetReadyPageIcon from '../components/icons/GetReadyPageIcon';
import CustomAllTypography from '../components/typography/CustomTypography';

const LogoContainer = styled('div')(({responsive})=>({
  display:'flex',
  justifyContent:'center',
  paddingTop:responsive.isMobile?'1rem':'',
  position: responsive.isMobile? '':'absolute',
  top:'2.19rem',left:'2.19rem'
}));

const ContentContainer = styled('div')(({responsive})=>({
  width:'100%',
  height:'100vh',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  maxWidth:responsive.isMobile ? '90%' :'',
  padding: responsive.isMobile ? '1rem' :''
}));
const GetReadyForExam = () => {
  const responsive = useResponsiveStyles();
  return (
    <div>
      <LogoContainer responsive={responsive}>
        <QuickConnectIcon />
      </LogoContainer>
      <ContentContainer responsive={responsive}>
        <GetReadyPageIcon />
        <CustomAllTypography variant={'h3'} name={'Get ready for some fun!'} 
        sx={{fontFamily:'Nunito',
                fontSize: '2rem',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '120%'}}/>
        <CustomAllTypography variant={'body1'} name={`The Interview round is just about to start, and`}/>
        <CustomAllTypography variant={'body1'} name={`you've got only 10 seconds left.`}/>
        <CustomAllTypography variant={'body1'} name={`Wishing you all the best and may the fun begin! 🚀🎉`}/>
      </ContentContainer>
    </div>
  )
}

export default GetReadyForExam;