import React from 'react';
import { styled } from '@mui/material';
import { Card, CardContent, CardHeader, useMediaQuery } from '@mui/material';
import useResponsiveStyles from '../../utils/MediaQuery';

export const CustomCard = styled(Card)(({ theme, responsive }) => ({
  maxWidth: '100%',
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