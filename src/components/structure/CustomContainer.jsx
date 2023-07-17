import React from 'react';
import { Container } from '@mui/material';

const CustomContainer = ({ children}) => {
  const isLgScreen = window.innerWidth >= 1280; // Adjust the breakpoint value as per your requirement
  const containerHeight = isLgScreen ? 'auto' : '100vh'; // Adjust the height value for non-lg screens

  // const containerHeight = isLgScreen ? 'fit-content' : '100vh';

  return (
    // <Container maxWidth="lg" style={{ height: containerHeight, backgroundColor:'red'}}>
    //   {children}
    // </Container>

    <Container maxWidth="lg" style={{ height: '100vh',  display: 'flex', justifyContent:'center',padding:'0', backgroundColor:''}}>
    {/* <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
      {children}
    {/* </div> */}
  </Container>

  // <Container maxWidth="lg" style={{ height: containerHeight, backgroundColor: 'red' ,margin:'0', padding:'0', display:'flex', justifyContent:'center', alignContent:'center'}}>
  //     {children}
  //   </Container>
  );
};

export default CustomContainer;


/*
import React from 'react';
import FixedHeightContainer from './FixedHeightContainer';

const YourComponent = () => {
  return (
    <FixedHeightContainer>
      continet
    //   </FixedHeightContainer>
    //   );
    // };
    // 
    // export default YourComponent;
    
*/
