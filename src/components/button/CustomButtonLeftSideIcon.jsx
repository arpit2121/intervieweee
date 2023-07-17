import React from 'react';
import {styled} from '@mui/material';
import { Button } from '@mui/material';
import useResponsiveStyles from '../../utils/MediaQuery';

export  const CustomInputButton = styled(Button)(({ theme, responsive, variant, size }) => {
  let fontSize;
  let padding;
  switch (size) {
    case 'large':
      fontSize = responsive.isMobile ? '16px' : responsive.isTablet ? '18px' : responsive.isDesktop ? '20px' : '24px';
      padding = responsive.isMobile ? '8px 16px' : responsive.isTablet ? '10px 20px' : responsive.isDesktop ? '12px 24px' : '14px 28px';
      break;
    case 'medium':
      fontSize = responsive.isMobile ? '14px' : responsive.isTablet ? '16px' : responsive.isDesktop ? '18px' : '20px';
      padding = responsive.isMobile ? '6px 12px' : responsive.isSm ? '8px 16px' : responsive.isDesktop ? '10px 20px' : '12px 24px';
      break;
    case 'small':
      fontSize = responsive.isMobile ? '12px' : responsive.isTablet ? '14px' : responsive.isDesktop ? '16px' : '18px';
      padding = responsive.isMobile ? '4px 8px' : responsive.isTablet ? '6px 12px' : responsive.isDesktop ? '8px 16px' : '10px 20px';
      break;
    case 'extra-small':
    default:
      fontSize = responsive.isXs ? '10px' : responsive.isTablet ? '12px' : responsive.isMd ? '14px' : '16px';
      padding = responsive.isXs ? '2px 4px' : responsive.isTablet ? '4px 8px' : responsive.isDesktop ? '6px 12px' : '8px 16px';
      break;
  }

  return {
    borderRadius: theme.shape.borderRadius,
    fontSize,
    padding,
    width:'100%',
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

const CustomButtonLeftSideIcon = ({props}) => {
  const responsive = useResponsiveStyles();

  return (
    <div>
      <CustomInputButton variant="contained" color="primary" responsive={responsive}>
        Button Text
      </CustomInputButton>
    </div>
  );
};

export default CustomButtonLeftSideIcon;


