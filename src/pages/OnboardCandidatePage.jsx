import React from 'react'
import useResponsiveStyles from '../utils/MediaQuery';
import CustomContainer from '../components/container/customContainer';
import { CustomCard } from '../components/card/CustomCard'
import { makeStyles } from '@mui/styles';
import CustomAllTypography from '../components/typography/CustomTypography';
import CommonCustomizedTextField from '../components/textfield/CommonCustomTextField';
import CustomButton, { CustomInputButton } from '../components/button/CustomButton';
import {useDropzone} from 'react-dropzone'
import ResumeDropzone from '../components/dropzone/ResumeDropzone';
import CustomDropDown from '../components/textfield/CustomDropDown';
import PhoneIcon from '../components/icons/PhoneIcon';
import QuickConnectIcon from '../components/icons/QuickConnectIcon';
import VectorLargeIcon from '../components/icons/VectorLargeIcon';
import Vector1Icon from '../components/icons/Vector1Icon';
import MailIcon from '../components/icons/MailIcon';
import DropdownIcon from '../components/icons/DropdownIcon';


const useStyle = makeStyles((theme) => ({
  parent: {
    backgroundColor: '#E5E4FF',
    width: '100%',
    background: 'linear-gradient(337deg, #E3E5FB 0%, #E6E7FA 12.50%,#F8F5F6 100%)',
    position: 'relative',
  },
  vectorBoxRight: {
    position: 'absolute',
    right: '0',
    top: '0'
  },
  vectorBoxLeft: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    maxWidth:'40rem'
  },
  cardBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:'6.25rem 0',
    [theme.breakpoints.down('sm')] :{
      padding: '2.25rem 0 0 0',
    }
  },
  cardContainer:{
    maxWidth:"31.8rem",
    padding: '3.25rem 4.75rem',
    [theme.breakpoints.down('sm')] :{
      padding: '3.25rem 1rem',
    }
  },
  textfieldContainer:{
    padding:'0 0 1.5rem 0',
  },
  dropZone: {
    padding: '2.5rem 8.75rem 3.75rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px dashed',
  },
  dropZoneContentBox:{
    maxWidth:'20.1rem',
    textAlign:'center',
  }
}));

const OnBoardingPage = () => {
  const responsive = useResponsiveStyles()
  const classes = useStyle();
  const menu = [
    {label:'ten',value:10},
    {label:'twenty',value:20},
    {label:'thirty',value:30},
  ]
  
  return (
    <CustomContainer>
      <div className={classes.parent}>
        <div style={{position:'absolute',width:'100%',...responsive.isMobile?{display:'flex',justifyContent:'center'}:{left:'2rem',top:'1rem'}}}>
          <QuickConnectIcon />
        </div>
        <div className={classes.vectorBoxRight}>
          {(!responsive.isMobile) ? <Vector1Icon width={'100%'} /> : ''}
        </div>
        <div className={classes.vectorBoxLeft}>
          <VectorLargeIcon width={(responsive.isMobile) ? '50%' : '100%'} />
        </div>
        <div className={classes.cardBox}>
          <CustomCard responsive={responsive}>
            <div className={classes.cardContainer}>
              <CustomAllTypography name={'Tell us about yourself.'} variant={'h3'} />
              <CustomAllTypography name={'Request you to provide us with some necessary information before starting the interview.'} variant={'body2'} />
              <div style={{ width: '100%', height: '2.69rem' }}></div>
              <div className={classes.textfieldContainer} >
                <CommonCustomizedTextField name={'Full Name'} width="100%"/>
              </div>
              <div className={classes.textfieldContainer} >
                <CommonCustomizedTextField name={'+91 Mobile no.'} startIcon={<PhoneIcon/>} width="100%"/>
              </div>
              <div className={classes.textfieldContainer} >
                <CommonCustomizedTextField name={'Email ID'} startIcon={<MailIcon/>} width="100%"/>
              </div>
              <div className={classes.textfieldContainer} >
                <CommonCustomizedTextField name={'Current Company name'} width="100%"/>
              </div>
              <div className={classes.textfieldContainer} >
                <CustomDropDown name={'Your Profession'} endIcon={<DropdownIcon/>} width="100%" menu={menu}/>
              </div>
              <div className={classes.textfieldContainer} >
                <CustomDropDown name={'Work Experience'} endIcon={<DropdownIcon/>} width="100%"/>
              </div>
              <ResumeDropzone/>
              <div style={{height:'2.69rem',width:'100%'}}></div>
              <CustomInputButton responsive={responsive} width={'100%'} size='small' >Get Started</CustomInputButton>
            </div>
          </CustomCard >
        </div>
      </div>
    </CustomContainer>
  )
}

export default OnBoardingPage