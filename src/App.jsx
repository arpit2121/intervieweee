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
      <Route path='/interview-details' element={<InterviewDetails/>}/>
      {/* <Route path='/practiceMode' element={<PracticeMode/>}/> */}
      <Route path='/interview-page' element={<InterviewPage/>}/>
      <Route path='/thanks' element={<ThankYouPage/>}/>
      <Route path='/get-ready' element={<GetReadyForExam/>}/>
    </Routes>
  )
}

export default App