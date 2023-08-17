import { useRef, useState } from 'react';
import {ReactMic} from 'react-mic'
 
const ReactMicComp =()=>{

 const [record,setRecord]=useState(true)
 const micref=useRef()
  const startRecording = () => {
    console.log('here')
    setRecord(true)
  }
 
 const stopRecording = () => {
    setRecord(false)
  }
 
  const onData=(recordedBlob)=> {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  const  onStop=(recordedBlob) =>{
    console.log('recordedBlob is: ', recordedBlob);
  }
 console.log(micref)
 
    return (
      <div style={{height:'100px',background:'red'}}>
       <ReactMic
              record={true}
            //   className={}
              onStop={onStop}
              onData={onData}
              strokeColor="grey"
              backgroundColor="white"
            />
        <button onClick={startRecording} type="button">Start</button>
        <button onClick={stopRecording} type="button">Stop</button>
      </div>
    );
  
}
export default ReactMicComp