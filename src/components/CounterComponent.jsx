import React, { useEffect, useState } from 'react'
import CustomAllTypography from './typography/CustomTypography'
import { setCounterVisible, setRecordState } from '../store/slices/InterviewPageSlice';
import { useDispatch } from 'react-redux';

function CounterComponent(props) {
  const dispatch= useDispatch()

    const [count, setCount]= useState(props.count)
    const [zoomedIn, setZoomedIn] = useState(true);

    const CounterStyle = {
        color:'#605DEC',
        fontSize: '16rem',
        transition: 'transform 1s ease-in-out',
        transform: zoomedIn ? 'scale(1.5)' : 'scale(1)',
      };
      useEffect(()=>{
        console.log("COUNTE", count)
        if(count===1){
          console.log("COUNTER INVOSIBLE NOW.....")
          dispatch(setCounterVisible(false))
        }
      },[count])
      
    useEffect(()=>{
        const timer = setInterval(() => {
            if (count > 0) {
                setZoomedIn((prevZoomedIn) => !prevZoomedIn);
                setCount(count-1)
              }
          }, 1000);
          return () => clearInterval(timer);
    },[count])

    
  return (
    <div style={{'width': '100vw','height': '100vh', display:'flex', justifyContent:'center', 'alignItems':'center',position: 'absolute',
    "top": 0,
    "left": 0,
    "zIndex": 2}}>
    <div style={CounterStyle}>
      {count}
    </div>
    </div>
    
  )
}

export default CounterComponent
