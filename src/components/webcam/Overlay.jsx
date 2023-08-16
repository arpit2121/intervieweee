import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const Overlay = () => {
  const useStyles = makeStyles((theme) => ({
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'transparent',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    slide: {
      width: '100%',
      height: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'black',
      opacity: 1,
      pointerEvents: 'auto',
      transition: 'transform 5s',
    },
    slideOutUp: {
      transform: 'translateY(-100%)',
    },
    slideOutDown: {
      transform: 'translateY(100%)',
    },
  }));

  const [show, setShow] = useState(false);
  const [unmount, setUnmount] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setShow(true);
  }, []);

  const handleTransitionEnd = () => {
    setShow(false);
    setUnmount(true);
  };

  if (unmount) {
    return null;
  }

  return (
    <div className={classes.overlay}>
      <div
        className={`${classes.slide} ${
          show ? classes.slideOutUp : classes.slide
        }`}
      ></div>
      <div
        className={`${classes.slide} ${
          show ? classes.slideOutDown : classes.slide
        }`}
        onTransitionEnd={handleTransitionEnd}
      ></div>
    </div>
  );
};

export default Overlay;
