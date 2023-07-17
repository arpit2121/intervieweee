import React from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, CardHeader, useMediaQuery } from '@mui/material';
import useResponsiveStyles from '../../utils/MediaQuery';

const CustomCard = styled(Card)(({ theme, responsive }) => ({
  maxWidth: '100%',
  margin: '1rem',
  [theme.breakpoints.up('sm')]: {
    maxWidth: responsive.isMobile ? '100%' : '75%',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: responsive.isTablet ? '100%' : '50%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: responsive.isDesktop ? '100%' : '33.33%',
  },
}));

const CustomCardComponent = ({ title, content }) => {
  const responsive = useResponsiveStyles();

  return (
    <CustomCard responsive={responsive}>
      <CardHeader title={title} />
      <CardContent>
        <div>{content}</div>
      </CardContent>
    </CustomCard>
  );
};

export default CustomCardComponent;
