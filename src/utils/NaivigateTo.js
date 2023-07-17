import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return {
    goTo,
  };
};

export default useNavigation;



/*
 -------- example -----------
import React from 'react';
import useNavigation from './useNavigation';

const YourComponent = () => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.goTo('/path');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Go to Path</button>
    </div>
  );
};

export default YourComponent;
*/