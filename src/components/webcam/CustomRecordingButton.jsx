import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayButtonIcon from '../icons/Recorder/PlayButtonIcon';
import ReplayArrowIcon from '../icons/recorder/ReplayArrowIcon';
import StopRecordingIcon from '../icons/recorder/StopRecordingIcon';
import useResponsiveStyles from '../../utils/MediaQuery';
import CustomAllTypography from '../typography/CustomTypography';
import { setRecordState, togglePreview } from '../../store/slices/InterviewPageSlice';

const CustomRecordingButton = () => {
  const responsive = useResponsiveStyles();
  const iconComponents = [PlayButtonIcon, PlayButtonIcon, StopRecordingIcon, ReplayArrowIcon];
  const dispatch = useDispatch();
  const recordState = useSelector(state => state.rootReducer.interviewPage.recordState);
  const RECORDING_DELAY_MS = 11000;
  const labels = ['Start Recording', 'Starting Recording...', 'Stop Recording', 'Retake'];

  const containerStyles = {
    width: 'max-content',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bottom: responsive.isMobile ? '9.5rem' : responsive.isTablet ? '2rem' : '2rem',
    right: responsive.isMobile ? '0.5rem' : '50%',
    transform: responsive.isMobile ? '' : 'translate(50%)',
  };

  const redCircleStyles = {
    width: '2.25rem',
    height: '2.25rem',
    background: '#FF1725',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const labelStyle = {
    paddingTop: '0.5rem',
    color: '#FFF',
    textAlign: 'center',
    width: responsive.isMobile ? '6rem' : '10rem',
  };

  const startingRecordingStyle = {
    transform: 'rotate(90deg)',
  };

  const [iconIndex, setIconIndex] = useState(0);

  const handleClick = () => {
    switch (iconIndex) {
      case 0:
        setIconIndex(1);
        dispatch(setRecordState('STARTED'));
        break;
      case 2:
        setIconIndex(3);
        dispatch(togglePreview(true));
        dispatch(setRecordState('RETAKE'));
        break;
      case 3:
        setIconIndex(1);
        dispatch(togglePreview(false));
        dispatch(setRecordState('STOPPED'));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (recordState === 'STARTED') {
      setIconIndex(1);
    }
    if (iconIndex === 1) {
      const recordingTimeout = setTimeout(() => {
        dispatch(setRecordState('RECORDING'));
        setIconIndex(2);
      }, RECORDING_DELAY_MS);
      return () => {
        clearTimeout(recordingTimeout);
      };
    }
  }, [iconIndex, recordState]);

  const IconComponent = iconComponents[iconIndex];

  return (
    <div style={containerStyles}>
      <div onClick={handleClick} style={{ background: '#FFF', opacity: '1', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',cursor: 'pointer'  }}>
        <div style={{ ...redCircleStyles, ...(iconIndex === 1 ? startingRecordingStyle : {})}}>
          <IconComponent />
        </div>    
      </div>
      <div style={labelStyle}>
        <CustomAllTypography variant={'body2'} name={labels[iconIndex]} style={labelStyle} />
      </div>
    </div>
  );
};

export default CustomRecordingButton;
