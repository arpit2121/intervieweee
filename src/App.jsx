import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import OnBoardingPage from './pages/OnboardCandidatePage'
import InterviewDetails from './pages/InterviewDetails';
import InterviewPage from './pages/InterviewPage'
import ThankYouPage from './pages/ThankYouPage'
import Expired from './pages/Expired'
import Loader from './assets/png/loader.gif'
import { useSelector } from 'react-redux'
import Unauthorized from './pages/Unauthorized'
import NotFound from './pages/NotFound'
import GetReadyForExam from './pages/GetReadyForExam'
import HomePage from './pages/HomePage'

function App() {

  const loading= useSelector((state) => state.rootReducer.interviewee.loading)
  return (
    <div>
{
  loading &&
  <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', top:'50vh', left:'50vw', zIndex:10}}>
  <img src={Loader} alt="" srcSet="" style={{ width: '5rem', height: '5rem', }} />
  </div>
}

<Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/:adminId/:jobpostId/:expiration' element={<OnBoardingPage/>} />
      {/* <Route path='/onboard-candidate' element={<OnBoardingPage/>}/> */}
      <Route path='/:adminId/:jobpostId/:expiration/:intervieweeId/interview-details' element={<InterviewDetails/>}/>
      {/* <Route path='/:adminId/:jobpostId/:expiration/:intervieweeId/practiceMode' element={<PracticeMode/>}/> */}
      <Route path='/:adminId/:jobpostId/:expiration/:intervieweeId/interview-page' element={<InterviewPage/>}/>
      <Route path='/thanks' element={<ThankYouPage/>}/>
      <Route path='/expired' element={<Expired/>}/>
      <Route path='/session-expired' element={<Unauthorized/>}/>
      <Route path='/not-found' element={<NotFound/>}/>
      <Route path='/:adminId/:jobpostId/:expiration/:intervieweeId/get-ready' element={<GetReadyForExam/>}/>
    </Routes>
    </div>
    
  )
}

export default App