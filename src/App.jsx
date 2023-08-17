import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import OnBoardingPage from './pages/OnboardCandidatePage'
import InterviewDetails from './pages/InterviewDetails';
import InterviewPage from './pages/InterviewPage'
import ThankYouPage from './pages/ThankYouPage'
import GetReadyForExam from './pages/GetReadyForExam'

function App() {
  return (
    <Routes>
      <Route path='/' element={<OnBoardingPage/>}/>
      <Route path='/onboard-candidate' element={<OnBoardingPage/>}/>
      <Route path='/interviewDetails' element={<InterviewDetails/>}/>
      {/* <Route path='/practiceMode' element={<PracticeMode/>}/> */}
      
      <Route path='/interviewPage' element={<InterviewPage/>}/>
      <Route path='/thanks' element={<ThankYouPage/>}/>
      <Route path='/getReady' element={<GetReadyForExam/>}/>
    </Routes>
  )
}

export default App