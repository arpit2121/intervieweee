import React, { useEffect, useState } from 'react';
import ReplayArrowIcon from '../icons/recorder/ReplayArrowIcon';
import StopRecordingIcon from '../icons/recorder/StopRecordingIcon';
import useResponsiveStyles from '../../utils/MediaQuery';
import CustomAllTypography from '../typography/CustomTypography';
import { useDispatch, useSelector } from 'react-redux';
import { setRecordState, togglePreview } from '../../store/slices/InterviewPageSlice';
import PlayButtonIcon from '../icons/Recorder/PlayButtonIcon';

const CustomRecordingButton = () => {
  const responsive = useResponsiveStyles();
  const iconComponents = [PlayButtonIcon, PlayButtonIcon, StopRecordingIcon, ReplayArrowIcon];
  const dispatch = useDispatch();
  const RecordState = useSelector((state) => state.rootReducer.interviewPage);
  const RECORDING_DELAY_MS = 5000;
  const labels = ['Start Recording', 'Starting Recording...', 'Stop Recording', 'Retake'];

  const containerStyles = {
    width: 'max-content',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bottom: responsive.isMobile ? '9.5rem' : responsive.isTablet ? '2rem' : '2rem',
    right: responsive.isMobile ? '0' :'50%',
    transform : responsive.isMobile ? '' : 'translate(50%)',
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

  const labelStyle={
    paddingTop: '0.5rem',
    color: '#FFF',
    textAlign: 'center',
    fontSize:responsive.isDesktop ? '1rem' :'0.625rem',
    width:responsive.isDesktop ? '10rem' : '6rem',
  }

  const startingRecordingStyle = {
    transform: 'rotate(90deg)',
  };

  const [iconIndex, setIconIndex] = useState(0);

  const handleClick = () => {
    if(iconIndex === 0){
      setIconIndex(1);
      dispatch(setRecordState("STARTED"));
    }else if(iconIndex===2){
      dispatch(togglePreview(true));
      setIconIndex(3);
      dispatch(setRecordState("RETAKE"));
    }else if(iconIndex===3){
      dispatch(togglePreview(false));
      setIconIndex(1);
      dispatch(setRecordState("STOPPED"));
    }
  };
  
  useEffect(() => {
    if (iconIndex === 1) {
      const recordingTimeout = setTimeout(() => {
        dispatch(setRecordState("RECORDING"));
        setIconIndex(2);
      }, RECORDING_DELAY_MS);
      return () => {
        clearTimeout(recordingTimeout);
      };
    }
  }, [iconIndex]);
  
  const IconComponent = iconComponents[iconIndex];

  return (
    <div style={containerStyles} onClick={handleClick}>
      <div style={{ background: '#FFF', opacity: '0.6', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ ...redCircleStyles, ...(iconIndex === 1 ? startingRecordingStyle : {}) }}>
          <IconComponent onClick={handleClick} style={{}}/>
        </div>
      </div>
      <div style={labelStyle}>
        <CustomAllTypography name={labels[iconIndex]} style={labelStyle}/>
      </div>
    </div>
  );
};

export default CustomRecordingButton;