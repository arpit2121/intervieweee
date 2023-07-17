import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';

const useResponsiveStyles = () => {
  const theme = useTheme();
  const [responsive, setResponsive] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      const breakpoints = theme.breakpoints;

      setResponsive({
        // isMobile: innerWidth < breakpoints.values.sm,
        // isTablet: innerWidth >= breakpoints.values.sm && innerWidth < breakpoints.values.md,
        // isDesktop: innerWidth >= breakpoints.values.md,
        isMobile: innerWidth < 640,
  isTablet: innerWidth >= 640 && innerWidth < 1280,
  isDesktop: innerWidth >= 1280,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme.breakpoints.values.md, theme.breakpoints.values.sm]);

  return responsive;
};

export default useResponsiveStyles;





/*

import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import useResponsiveStyles from './useResponsiveStyles';

const CustomInputButton = styled(Button)(({ theme, responsive }) => ({
  borderRadius: theme.shape.borderRadius,
  fontSize: responsive.isXs ? '12px' : responsive.isSm ? '14px' : responsive.isMd ? '16px' : '20px',
  padding: responsive.isXs ? '6px 12px' : responsive.isSm ? '8px 16px' : responsive.isMd ? '10px 20px' : '12px 24px',
}));

const YourComponent = () => {
  const responsive = useResponsiveStyles();

  return (
    <div>
      <CustomInputButton variant="contained" color="primary" responsive={responsive}>
        Button Text
      </CustomInputButton>
    </div>
  );
};

export default YourComponent;


import React from 'react';
import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import useResponsiveStyles from './useResponsiveStyles';

const CustomTextField = styled(TextField)(({ responsive }) => ({
  width: responsive.isXs ? '100%' : responsive.isSm ? '80%' : responsive.isMd ? '60%' : '40%',
  marginBottom: '16px',
}));

const YourComponent = () => {
  const responsive = useResponsiveStyles();

  return (
    <div>
      <CustomTextField variant="outlined" label="Name" responsive={responsive} />
      <CustomTextField variant="outlined" label="Email" responsive={responsive} />
    </div>
  );
};

export default YourComponent;


*/