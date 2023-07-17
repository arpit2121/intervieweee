import React from 'react';
import {styled} from '@mui/material';
import useResponsiveStyles from '../../utils/MediaQuery';
import { Typography } from '@mui/material';

export const CustomTypography = styled(Typography)(({ responsive }) => ({
  '&.MuiTypography-h1': {
    fontWeight: 'bold',
    fontSize: responsive.isMobile
    ? '24px'
    : responsive.isTablet
    ? '48px'
    : '56px',
  },
  '&.MuiTypography-h2': {
    fontWeight: 'bold',
    fontSize: responsive.isMobile
      ? '20px'
      : responsive.isTablet
      ? '32px'
      : '48px',
  },
  '&.MuiTypography-h3': {
    fontWeight: 'bold',
    fontSize: responsive.isMobile
      ? '18px'
      : responsive.isTablet
      ? '24px'
      : '32px',
  },
  '&.MuiTypography-h4': {
    fontWeight: 'bold',
    fontSize: responsive.isMobile
      ? '16px'
      : responsive.isTablet
      ? '18px'
      : '24px',
  },
  '&.MuiTypography-h5': {
    fontWeight: 'bold',
    fontSize: responsive.isMobile
      ? '14px'
      : responsive.isTablet
      ? '16px'
      : '18px',
  },
  '&.MuiTypography-h6': {
    fontWeight: 'bold',
    fontSize: responsive.isMobile
      ? '12px'
      : responsive.isTablet
      ? '14px'
      : '16px',
  },
  '&.MuiTypography-body1': {
    fontWeight: 'regular',
    fontSize: responsive.isMobile
      ? '16px'
      : responsive.isTablet
      ? '16px'
      : '18px',
  },
  '&.MuiTypography-body2': {
    fontWeight: 'regular',
    fontSize: responsive.isMobile
      ? '14px'
      : responsive.isTablet
      ? '14px'
      : '16px',
  },
  '&:hover': {
    cursor: 'pointer',
  },
}));

const CustomAllTypography = (props) => {
  const responsive = useResponsiveStyles();
  console.log(responsive)
  return (
      <CustomTypography variant={props.variant} responsive={responsive}>
        {props.name}
      </CustomTypography>
  );
};

export default CustomAllTypography;
