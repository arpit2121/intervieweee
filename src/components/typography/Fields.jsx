import React from 'react';
import {styled} from '@mui/material';
import { Typography } from '@mui/material';
import useResponsiveStyles from '../../utils/MediaQuery';

const TextContainer = styled('div')(({ color }) => ({
  marginBottom: '16px',
  color: color || 'black',
}));

export const TextTitle = styled(Typography)(({ size,responsive }) => ({
  fontSize:  responsive.isMobile
  ? '12px'
  : responsive.isTablet
  ? '16px'
  : '16px',
  fontWeight: 'regular',
}));

export const TextDescription = styled(Typography)(({ size,responsive,color }) => ({
  fontSize: size?size:responsive.isMobile
  ? '12px'
  : responsive.isTablet
  ? '16px'
  : '16px',
  fontWeight: 'regular',
  fontColor: color?color:''
}));

export const TextPlaceholder = styled(Typography)(({ size,responsive }) => ({
    fontSize: responsive.isMobile
    ? '16px'
    : responsive.isTablet
    ? '24px'
    : '24px',
  fontWeight: 'regular',
}));

const YourComponent = () => {
    const responsive = useResponsiveStyles();
  return (
    <div>
      <TextContainer>
        <TextTitle size="24px">Title</TextTitle>
        <TextDescription size="18px">Description</TextDescription>
        <TextPlaceholder size="16px">Placeholder</TextPlaceholder>
      </TextContainer>

      <TextContainer color="blue">
        <TextTitle size="28px">Custom Title</TextTitle>
        <TextDescription size="20px">Custom Description</TextDescription>
        <TextPlaceholder size="18px">Custom Placeholder</TextPlaceholder>
      </TextContainer>
    </div>
  );
};

export default YourComponent;

