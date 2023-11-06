import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import OnBoardingPage from './pages/OnboardCandidatePage'
import InterviewDetails from './pages/InterviewDetails';
import InterviewPage from './pages/InterviewPage'
import ThankYouPage from './pages/ThankYouPage'
import GetReadyForExam from './pages/GetReadyForExam'
import Posenet from './components/webcam/Posenet'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Posenet/>}/>
      <Route path='/:adminId/:jobpostId/:expiration' element={<OnBoardingPage/>}/>
      {/* <Route path='/onboard-candidate' element={<OnBoardingPage/>}/> */}
      <Route path='/:adminId/:jobpostId/:expiration/:intervieweeId/interview-details' element={<InterviewDetails/>}/>
      {/* <Route path='/:adminId/:jobpostId/:expiration/:intervieweeId/practiceMode' element={<PracticeMode/>}/> */}
      <Route path='/:adminId/:jobpostId/:expiration/:intervieweeId/interview-page' element={<InterviewPage/>}/>
      <Route path='/thanks' element={<ThankYouPage/>}/>
      <Route path='/:adminId/:jobpostId/:expiration/:intervieweeId/get-ready' element={<GetReadyForExam/>}/>
    </Routes>
  )
}

export default App