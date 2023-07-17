import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import CustomButton from '../button/CustomButoon';
import SimpleTextField from '../textfield/SimpleTextField';



const OnBoardingCard = () =>(
   <Card sx={{ width:'40%' , height:'70%', borderRadius:'14px', boxShadow:'0px 8px 16px 0px rgba(142, 141, 208, 0.12)', display:'flex', flexDirection:'column', justifyContent:'space-around', padding:'3rem'}}>
    <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',height:'80%'}}>
      <div style={{height:'8%'}}><h3>Let us know about you</h3></div>
      <div style={{height:'80%'}}>
        <SimpleTextField placeHolder={'name'}/>
      </div>
    </CardContent>
    <CardActions>
      <div style={{height:'100%', width:'100%'}}>
        <CustomButton name={'proceed'}/>
      </div>
    </CardActions>
  </Card>
);

export default OnBoardingCard;