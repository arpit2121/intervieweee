import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayButtonIcon from '../icons/recorder/PlayButtonIcon.jsx';
import ReplayArrowIcon from '../icons/recorder/ReplayArrowIcon.jsx';
import StopRecordingIcon from '../icons/recorder/StopRecordingIcon.jsx';
import useResponsiveStyles from '../../utils/MediaQuery';
import CustomAllTypography from '../typography/CustomTypography';
import { setCounterVisible, setRecordState, setRetakeCount, togglePreview } from '../../store/slices/InterviewPageSlice';
import { convertTimeStringToSeconds } from '../../common/convertToSeconds.js';

const CustomRecordingButton = ({CounterEnabled}) => {
  const responsive = useResponsiveStyles();
  const iconComponents = [PlayButtonIcon, PlayButtonIcon, StopRecordingIcon, ReplayArrowIcon];
  const dispatch = useDispatch();
  const recordState = useSelector(state => state.rootReducer.interviewPage.recordState);
  const { is360RecordingCompleted,question, check360, retakeCount, practiceMode} = useSelector(
    (state) => state.rootReducer.interviewPage)
  const thinkTime= practiceMode?10:question?.nextQuestion?convertTimeStringToSeconds(question?.nextQuestion?.thinkingTime): convertTimeStringToSeconds(check360.thinkTime)
  // const RECORDING_DELAY_MS = 11000;
  const labels = ['Start Recording', 'Starting Recording...', 'Stop Recording', 'Retake'];

  const containerStyles = {
    width: 'max-content',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bottom: responsive.isMobile ? '9.5rem' : responsive.isTablet ? '2rem' : '1rem',
    right: responsive.isMobile ? '0.5rem' : '50%',
    transform: responsive.isMobile ? '' : 'translate(50%)',
    opacity:CounterEnabled?'50%':"100%"
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
    console.log("INDEX", iconIndex)
    switch (iconIndex) {
      case 0:
        setIconIndex(1);
        dispatch(setCounterVisible(true))
        dispatch(setRecordState('OPEN'))
        // dispatch(setRecordState('STARTED'));
        break;
      case 2:
        setIconIndex(3);
        dispatch(togglePreview(true));
        dispatch(setRecordState('STOPPED'));
        break;
      case 3:
        setIconIndex(1);
        dispatch(togglePreview(false));
        dispatch(setRecordState('RETAKE'));
        dispatch(setRetakeCount())
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (recordState === 'OPEN' || recordState==="RETAKE") {
      setIconIndex(1);
    }
    if (iconIndex === 1) {
      const recordingTimeout = setTimeout(() => {
        dispatch(setRecordState('STARTED'));
        setIconIndex(2);
      }, thinkTime*1000);
      return () => {
        clearTimeout(recordingTimeout);
      };
    }
  }, [iconIndex, recordState]);



  const IconComponent = iconComponents[iconIndex];

  return (
    recordState==='STOPPED' &&  (retakeCount === question?.nextQuestion?.retakes)?
    "":
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
