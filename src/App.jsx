import React, { useState } from 'react'
import Home from './components/structure/Home/Home'
import OnBoardingPage from './pages/OnBoardingPage'
import Password from './pages/Password'
import Login from './pages/Login'
import OtpVerification from './pages/OtpVerification'
import { Routes,Route } from 'react-router-dom'
import { TextField } from '@mui/material'
import {styled} from '@mui/material'
import CustomizedTextField from './components/textfield/CustomizedTextField'



const App = () => {

  return (
   <Routes>
    <Route path='/' element={<Home/>}>
      <Route path='login' element={<Login/>}/>
      <Route path='otp' element={<OtpVerification/>}/>
      <Route path='password' element={<Password/>}/>
    </Route>
    <Route path='on-boarding' element={<OnBoardingPage/>}></Route>
   </Routes>
  )
}

export default App;

