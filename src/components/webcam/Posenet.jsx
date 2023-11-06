import React,{useEffect, useRef, useState} from 'react'
import swal from 'sweetalert';
import * as posenet from '@tensorflow-models/posenet';
import Webcam from 'react-webcam';
import useResponsiveStyles from '../../utils/MediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import PlayButtonIcon from '../icons/Recorder/PlayButtonIcon';
import StopRecordingIcon from '../icons/recorder/StopRecordingIcon';
import ReplayArrowIcon from '../icons/recorder/ReplayArrowIcon';
import CustomAllTypography from '../typography/CustomTypography';
import './animationloader.css'


const Posenet = () => {

  const responsive = useResponsiveStyles();
  const iconComponents = [PlayButtonIcon, PlayButtonIcon, StopRecordingIcon, ReplayArrowIcon];
  const dispatch = useDispatch();
  const recordState = useSelector(state => state.rootReducer.interviewPage.recordState);
  const { is360RecordingCompleted,question, check360, retakeCount, practiceMode} = useSelector(
    (state) => state.rootReducer.interviewPage)
    const thinkTime= practiceMode?10:is360RecordingCompleted? parseFloat(question?.nextQuestion?.thinkingTime): parseFloat(check360.thinkTime)
  // const RECORDING_DELAY_MS = 11000;
  const labels = ['Start Recording', 'Starting Recording...', 'Stop Recording', 'Retake'];
  const [mytimer, setMyTimer]= useState(false)
  const [count, setCount]= useState(5)

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





  useEffect(() => {
    const timer = setInterval(() => {
      if(mytimer){
        setCount(count=>count-1)
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [mytimer]);

  useEffect(()=>{
    console.log("Count", count)
    if(count<=0){
      setMyTimer(false)
      setIconIndex(3)
    }
  },[count])

 

  const [iconIndex, setIconIndex] = useState(0);

  const handleClick = () => {
    console.log("INDEX", iconIndex)
    switch (iconIndex) {

      case 0:
        setIconIndex(1);
        // dispatch(setCounterVisible(true))
        // dispatch(setRecordState('OPEN'))
        // dispatch(setRecordState('STARTED'));
        break;

      case 1:
        setIconIndex(2);
        setMyTimer(true)
        // dispatch(setRecordState('STARTED'));
        break;
      case 2:
        setIconIndex(3);
        // dispatch(togglePreview(true));
        // dispatch(setRecordState('STOPPED'));
        setMyTimer(true)
        break;
      case 3:
        setIconIndex(1);
        // dispatch(togglePreview(false));
        // dispatch(setRecordState('RETAKE'));
        // dispatch(setRetakeCount())
        break;
      default:
        break;
    }
  };

  const IconComponent = iconComponents[iconIndex];

  return (<div style={{display:'flex', 'justifyContent':'center', 'alignItems':'center', backgroundColor:'grey', width:'100vw', height:'100vh'}}>
    
    
    {/* <svg> */}
      {/* <style>{keyframes}</style> */}
    {/* <circle cx={20} cy={20} r={10} strokeLinecap='round'  */}
{/* style={animation} */}
    {/* // style={{fill:'none', stroke: 'cornflowerblue', strokeWidth:'20px', strokeDasharray:400, strokeDashoffset:200}} */}
    {/* > */}
{/* </circle> */}
    {/* </svg> */}

    <div style={containerStyles}>
    <div className="circle-container" >
      <div className="circle"></div>
    </div>
      {/* <div onClick={handleClick} style={{ background: '#FFF', opacity: '1', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',cursor: 'pointer'  }}>         
        <div style={{ ...redCircleStyles, ...(iconIndex === 1 ? startingRecordingStyle : {})}}>
          <IconComponent />
        </div>
      </div> */}
      <div style={labelStyle}>
        <CustomAllTypography variant={'body2'} name={labels[iconIndex]} style={labelStyle} />
      </div>
    </div>
  </div>
  )
}

export default Posenet;