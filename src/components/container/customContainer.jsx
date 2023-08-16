import React from 'react';
import { Container } from '@mui/material';

const CustomContainer = ({ children}) => {

  return (
    <Container maxWidth="xl" style={{ display: 'flex',padding:'0'}}>
      {children}
    </Container>
  );
};

export default CustomContainer;