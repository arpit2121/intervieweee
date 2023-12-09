import React, { useCallback, useState } from 'react'
import useResponsiveStyles from '../../utils/MediaQuery';
import Waveform from "react-audio-waveform";




function AudioWave() {
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
      <p>Hrushi</p>
      
    </div>
  )
}

export default AudioWave
