import React from 'react'
import CustomContainer from '../components/container/customContainer'
import QuickConnectIcon from '../components/icons/QuickConnectIcon'

function HomePage() {
  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh'}}>
        <QuickConnectIcon />
    </div>
  )
}

export default HomePage
