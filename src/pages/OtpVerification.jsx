import React,{useState} from 'react';
import CustomButton, { CustomInputButton } from '../components/button/CustomButoon';
import OTPInput from '../components/otp';
import CustomAllTypography from '../components/typography/CustomTypograpgy';
import { TextDescription } from '../components/typography/Fields';
import useResponsiveStyles from '../utils/MediaQuery';

const OtpVerification = () => {
    const responsive = useResponsiveStyles();
    const [newUser, setNewUser] = useState(true)
   const [otp,setOtp] = useState('');
   console.log("haha", otp)
  return (
    <div style={{ width: "100%", height: "100%"}}>
        <div>
        <CustomAllTypography variant={'h2'} name=
            {newUser? 'New Account Verification':'Account Verification'}/>
            <TextDescription responsive={responsive}>Please enter the 4-digit code sent to youremail@example.com</TextDescription>
        </div>
        <div style={{ height:  '50%', display:'flex', flexDirection:'column',justifyContent:'space-around', width:'100%',paddingTop:"2rem", backgroundColor:''}}>
        <OTPInput
          autoFocus
          length={4}
          className="otpContainer"
          inputClassName="otpInput"
          onChangeOTP={(otp) => setOtp(otp)}
        />
        <div style={{ height: "10%", width:'100%',paddingTop:'2rem'}}>
        <CustomInputButton variant="contained" responsive>verify</CustomInputButton>
        <div style={{display:'flex', gap:'10px'}}> 
        <CustomAllTypography variant={'body2'} name=
            {'Resend in'}/>
            <CustomAllTypography variant={'body2'} name=
            {'30s'}/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default OtpVerification