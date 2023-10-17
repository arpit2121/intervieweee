import React, { useEffect, useState } from 'react'


function AudioFrequency() {
   

useEffect(()=>{
    console.log("INSIDE CVOUDE")
},[])

  return (
   <div style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh'}}>
<canvas style={{  backgroundColor:'pink'}}></canvas>
   </div>
        
  )
}

export default AudioFrequency
