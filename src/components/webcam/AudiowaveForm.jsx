import React, { useEffect } from 'react'
import useResponsiveStyles from '../../utils/MediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { AudioRecorder } from 'react-audio-voice-recorder';


function AudiowaveForm(props) {

    const responsive = useResponsiveStyles();

  
    const audioContainer={
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: responsive.isMobile ? '9.5rem' : responsive.isTablet ? '2rem' : '1rem',
        backgroundColor:'#FF1725',
        minHeight: '3rem',
        opacity:'0.5',
        zIndex:10
    }

    return (
    <div style={audioContainer}>
     <AudioRecorder 

      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="webm"
    />
    </div>
  )
}

export default AudiowaveForm
