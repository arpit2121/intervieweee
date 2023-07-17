import React from 'react';
import { styled } from '@mui/material';
import googleLogo from '../../assets/google.png'

const GoogleLoginButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: white;
  color: #2B2B34;
  border: 1px solid #1D1D27;
  border-radius: 14px;
  font-size: 16px;
  cursor: pointer;

`;

const GoogleLogo = styled('img')`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const GoogleSocial = () => {
  const handleLogin = () => {
    // Handle Google login logic here
  };

  return (
    <GoogleLoginButton onClick={handleLogin}>
      <GoogleLogo src={googleLogo} alt="Google Logo" />
      Sign in with Google
    </GoogleLoginButton>
  );
};

export default GoogleSocial;
