import { styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomAllTypography from '../typography/CustomTypography';
import useResponsiveStyles from '../../utils/MediaQuery';
import RecordingDotIcon from '../icons/Recorder/RecordingDotIcon';

const RecordTimer = ({ minutes }) => {

  const responsive = useResponsiveStyles();

  const initialTimeInSeconds = minutes * 60;
  const [startTimer, setStartTimer] = useState(true);
  const [time, setTime] = useState(initialTimeInSeconds);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const endTime = currentTime + initialTimeInSeconds * 1000;
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = Math.max(0, endTime - currentTime);
      setTime(Math.floor(remainingTime / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTimeInSeconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (time === 0) {
      // Your logic here
    }
  }, [time]);

  const TypoStyle = {
    fontFamily: 'Inter',
    color: '#FFFF'
  }
  const container = {
    zIndex: 3,
    background:'rgba(10, 10, 10, 0.35)',
    width: 'max-content',
    borderRadius:'1.25rem',
    position: 'absolute',
    padding:'0.35rem 0.75rem 0.35rem 0.45rem',
    top: "1.8rem",
    right:'1.5rem',
    display:'flex',
    alignItems:'center',
    columnGap:'0.5rem',
  }
  const fontStyle = {
    fontSize : responsive.isMobile ? '0.8rem' : (responsive.isTablet ? '1rem' : '1.4rem' )
  }
  return (
    <div style={container}>
      <RecordingDotIcon/>
      {
        startTimer ?
          <CustomAllTypography  variant={'body2'} name={`Rec : ${formatTime(time)}s`}  style={TypoStyle}/>
          :
          <CustomAllTypography name={"Record "} style={TypoStyle} />
      }
    </div>
  );
};

export default RecordTimer;