import React from 'react';
import {styled} from '@mui/material';
import useResponsiveStyles from '../../utils/MediaQuery';
import { Typography } from '@mui/material';

export const CustomTypography = styled(Typography)(({ responsive , fontWeight, color,lineHeight,cursor}) => ({
  '&.MuiTypography-h1': {
    fontWeight: fontWeight || 'bold',
    fontSize: responsive.isMobile
    ? '24px'
    : responsive.isTablet
    ? '48px'
    : '56px',
    lineHeight:lineHeight
  },
  '&.MuiTypography-h2': {
    fontWeight: fontWeight || 'bold',
    fontSize: responsive.isMobile
      ? '20px'
      : responsive.isTablet
      ? '32px'
      : '48px',
      lineHeight:lineHeight
  },
  '&.MuiTypography-h3': {
    // fontFamily:'Nunito Sans',
    fontWeight: fontWeight || 'bold',
    fontSize: responsive.isMobile
      ? '18px'
      : responsive.isTablet
      ? '24px'
      : '32px',
      lineHeight:lineHeight
  },
  '&.MuiTypography-h4': {
    fontWeight: fontWeight || 'bold',
    fontSize: responsive.isMobile
      ? '16px'
      : responsive.isTablet
      ? '18px'
      : '24px',
      lineHeight:lineHeight
  },
  '&.MuiTypography-h5': {
    fontWeight: fontWeight || 'bold',
    fontSize: responsive.isMobile
      ? '14px'
      : responsive.isTablet
      ? '16px'
      : '18px',
      lineHeight:lineHeight
  },
  '&.MuiTypography-h6': {
    color:color,
    fontWeight: fontWeight || 'bold',
    fontSize: responsive.isMobile
      ? '12px'
      : responsive.isTablet
      ? '14px'
      : '16px',
      lineHeight:lineHeight
  },
  '&.MuiTypography-body1': {
    fontWeight: fontWeight || 'regular',
    fontSize: responsive.isMobile
      ? '16px'
      : responsive.isTablet
      ? '16px'
      : '18px',
      lineHeight:lineHeight
  },
  '&.MuiTypography-body2': {
    fontWeight: fontWeight || 'regular',
    fontSize: responsive.isMobile
      ? '14px'
      : responsive.isTablet
      ? '14px'
      : '16px',
      lineHeight:lineHeight
  },
  '&:hover': {
    cursor: cursor || '',
  },
}));

const CustomAllTypography = (props) => {
  const responsive = useResponsiveStyles();
  return (
      <CustomTypography variant={props.variant} responsive={responsive} fontWeight={props.fontWeight} color={props.color} style={props.style}>
        {props.name}
      </CustomTypography>
  );
};

export default CustomAllTypography;