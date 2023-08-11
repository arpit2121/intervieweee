import React, { useState } from 'react';
import CustomAllTypography from '../typography/CustomTypography';
import useResponsiveStyles from '../../utils/MediaQuery';

const RecordInfo = (props) => {
  const responsive = useResponsiveStyles();
  const [isClicked, setIsClicked] = useState(false);
  const containerStyle = {
    border: '1px solid #A0A1A6',
    background: 'rgba(73, 73, 73, 0.51)',
    backdropFilter: 'blur(3px)',
    padding: '1.7rem 0.5rem',
    borderRadius: '1.31rem',
    width: 'max-content',
    position: 'absolute',
    transition: '1s',
    top: responsive.isMobile ? '22rem' : '14.2rem',
    left: isClicked && responsive.isMobile ? '50%' : responsive.isMobile ? '-8.5rem' : '2.2rem',
    transform: isClicked && responsive.isMobile ? 'translateX(-50%)' : 'none',
    zIndex: 3,
    color: '#FFF',
  };

  const handleClick = () => {
    if (responsive.isMobile) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <div style={containerStyle} onClick={handleClick}>
      <DetailBlock  name={'Time to Ans:'} value={`10 m`} style={{ marginBottom: responsive.isMobile ? '0.5rem' : '1rem' }} />
      <DetailBlock  name={'Thinking Time:'} value={`01 s`} style={{ marginBottom: responsive.isMobile ? '0.5rem' : '1rem' }} />
      <DetailBlock  name={'Retake:'} value={responsive.isMobile ? 'Ultd' : 'Unlimited'} />
    </div>
  );
};

export default RecordInfo;

const DetailBlock = ({name,value,onClick,style}) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'rgba(73, 73, 73, 0.51)',
        padding: '0.4rem',
        borderRadius: '0.63rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: '2rem',
        ...style,
      }}
    >
      <CustomAllTypography variant={'body2'} name={name} style={{ alignItems: 'center' }} />
      <CustomAllTypography variant={'body2'} name={value} style={{ alignItems: 'center' }} />
    </div>
  );
};
