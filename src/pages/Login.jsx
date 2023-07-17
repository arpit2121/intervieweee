import React, { useState } from 'react'
import CustomAllTypography from '../components/typography/CustomTypograpgy'
import useResponsiveStyles from '../utils/MediaQuery'
import { TextTitle } from '../components/typography/Fields'
import { CustomInputButton } from '../components/button/CustomButoon'
import NormalCustomTextField from '../components/textfield/CustomTextfield'
import GoogleSocial from '../components/social/GoogleSocial'
import CustomizedTextField from '../components/textfield/CustomizedTextField'

const Login = () => {
    const responsive = useResponsiveStyles();
    const [email, setEmail] = useState('');
  return (
    <div style={{width:'100%',height:'100%'}}>
        <div style={{height:'20%'}}>
            <CustomAllTypography variant={'h1'} name=
            {'Login/Signup'}/>
        </div>
        <div style={{height:'15%'}}>
            <GoogleSocial/>
        </div>
        <div style={{display:'flex', justifyContent:'center',height:'10%'}}>
            <TextTitle responsive={responsive}>or</TextTitle>
        </div>
        <div style={{height:'50%'}}>
        {/* <NormalCustomTextField title={'Email ID'} data={email} setData={setEmail}/> */}
        <CustomizedTextField title={'Email ID'} data={email} setData={setEmail}/>
        </div>
        <div style={{height:'10%'}}>
            <CustomInputButton variant="contained" responsive>Continue</CustomInputButton>
        </div>
    </div>
  )
}

export default Login