import React from 'react';
import {styled} from '@mui/material';
import { Button } from '@mui/material';
import useResponsiveStyles from '../../utils/MediaQuery';

export  const CustomInputButton = styled(Button)(({ theme, responsive, variant, size,width,bgcolor }) => {
  let padding;
  switch (size) {
    case 'large':
      padding = '1.25rem 2rem';
      break;
      case 'normal':
      padding = '1rem 2rem';
      break;
    case 'medium':
      padding = '0.88rem 2rem';
      break;
    case 'small':
      padding = '0.75rem 1.5rem';
      break;
    case 'extra-small':
      padding = '0.5rem 1.5rem';
      break;
    default:
      padding = '0rem 1.5rem';
      break;
  }

  return {
    display:'flex',
    // gap:'0.5rem',
    borderRadius: '1.125rem',
    width: width?'100%':'',
    textTransform: `unset`,
    padding,
    color: variant === 'outlined' ? '#605DEC' : variant === 'text' ? '#605DEC' : '#FFFFFF',
    backgroundColor: variant === 'outlined' ? 'transparent' : variant === 'text' ? 'transparent' : '#000000',
    border: variant === 'outlined' ? '1px solid #605DEC' : variant === 'text' ? 'none' : 'none',
    '&:hover': {
      backgroundColor: variant === 'outlined' ? '#F6F5FF' : variant === 'text' ? '#F6F5FF' : '#3D3ACE',
    },
    '&:focus': {
      border: variant === 'outlined' ? '1px solid  #F845FC' : variant === 'text' ? ' 1px solid  #F845FC' : '1px solid  #F845FC',
      backgroundColor: variant === 'outlined' ? '#F6F5FF' : variant === 'text' ? '#F6F5FF' : '#3D3ACE',
    },
    '&:active': {
      backgroundColor: variant === 'outlined' ? '#F6F5FF' : variant === 'text' ? '#F6F5FF' : '#3D3ACE',
      color: variant === 'outlined' ? '#C5C0DB' : variant === 'text' ? '#605DEC' : '#FFFFFF',
    },
    '&:disabled': {
      backgroundColor: variant === 'outlined' ? 'transparent' : variant === 'text' ? 'transparent' : '#F4F3FE',
      color: variant === 'outlined' ? '#C5C0DB' : variant === 'text' ? '#C5C0DB' : '#C5C0DB',
    },
    '&.MuiButton-clicked': {
      backgroundColor: variant === 'outlined' ? '#F6F5FF' : variant === 'text' ? '#E2E1FF' : '#23209F',
      color: variant === 'outlined' ? '#FFFFFF' : variant === 'text' ? '#605DEC' : '#C5C0DB',
    },
  };
});

const CustomButton = (props) => {
  const responsive = useResponsiveStyles();
  const handleButtonClick = () => {
    console.log("hii")
  };
  return (
    <div>
      <CustomInputButton width={props?.width} variant={props.variant?props.variant:"contained"} color="primary" responsive={responsive} onClick={handleButtonClick} sx={{backgroundColor:props.bgcolor}}>
        {props.name}
      </CustomInputButton>
    </div>
  );
};

export default CustomButton;