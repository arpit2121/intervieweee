import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch

const useRecordState = () => {
  const dispatch = useDispatch(); // Get the dispatch function
  const interviewPage = useSelector((state) => state.rootReducer.interviewPage);
  const [recordState, setRecordState] = useState(interviewPage.recordState);

  const startRecording = () => {
    dispatch(setRecordState('OPEN')); // Dispatch the action to update the state
    setRecordState('OPEN'); // Update local state if needed
  };

  const recording = () => {
    dispatch(setRecordState('STARTED')); // Dispatch the action to update the state
    setRecordState('STARTED'); // Update local state if needed
  };

  const stopRecording = () => {
    dispatch(setRecordState('STOPPED')); // Dispatch the action to update the state
    setRecordState('STOPPED'); // Update local state if needed
  };

  const retakeRecording = () => {
    dispatch(setRecordState('RETAKE')); // Dispatch the action to update the state
    setRecordState('RETAKE'); // Update local state if needed
  };

  return [recordState, startRecording, recording, stopRecording, retakeRecording];
};

export default useRecordState;
