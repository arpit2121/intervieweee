import React from 'react'
import CustomContainer from '../components/container/customContainer'
import QuickConnectIcon from '../components/icons/QuickConnectIcon'
import CustomAllTypography from '../components/typography/CustomTypography'
import AudioWave from '../components/webcam/AudioWave'

function HomePage() {
  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh'}}>
        {/* <AudioWave/> */}
        <QuickConnectIcon />
    </div>
  )
}

export default HomePage
