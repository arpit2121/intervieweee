import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/system';
import CustomAllTypography from '../typography/CustomTypography';
import useResponsiveStyles from '../../utils/MediaQuery';
import { convertTimeStringToSeconds } from '../../common/convertToSeconds';

const useDynamicDimension = () => {
  const res = useResponsiveStyles();
  const width = res.isMobile ? '10rem' : res.isTablet ? '10rem' : res.isDesktop ? '12rem' : '12rem';
  return { width };
};

const Container = styled('div')(({ isClicked, responsive }) => ({
  border: '1px solid #A0A1A6',
  background: 'rgba(73, 73, 73, 0.51)',
  backdropFilter: 'blur(3px)',
  padding: '1.7rem 0.5rem',
  borderRadius: '1.31rem',
  width: useDynamicDimension().width,
  position: 'absolute',
  transition: '1s',
  top: responsive.isMobile ? '22rem' : '35%',
  left: isClicked && responsive.isMobile ? '50%' : responsive.isMobile ? '-8rem' : '2.2rem',
  transform: isClicked && responsive.isMobile ? 'translateX(-50%)' : 'none',
  zIndex: 3,
  color: '#FFF',
}));

const RecordInfo = (props) => {
  const responsive = useResponsiveStyles();
  const [isClicked, setIsClicked] = useState(false);
  const {practiceMode,is360RecordingCompleted,check360,question} = useSelector((state) => state.rootReducer.interviewPage);
  // const timeToAns = practiceMode ? 1.5: is360RecordingCompleted !== true? check360.timeToAnswer: question?.timeToAnswer;
  // const timeToThink = practiceMode ? 0 : is360RecordingCompleted !== true? check360.thinkTime: question?.thinkTime;
  const timeToAns= practiceMode? 2: !is360RecordingCompleted? convertTimeStringToSeconds(check360.timeToAnswer): convertTimeStringToSeconds(question?.timeToAnswer)
  const handleClick = () => {
    if (responsive.isMobile) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <Container isClicked={isClicked} responsive={responsive} onClick={handleClick}>
      <DetailBlock name={'Time to Ans:'} value={practiceMode?"10m":is360RecordingCompleted? (question?.nextQuestion?.timeToAnswer):`${check360.timeToAnswer} `} marginBottom={responsive.isMobile ? '0.5rem' : '1rem'} />
      <DetailBlock name={'Thinking Time:'} value={practiceMode ? "10s" :is360RecordingCompleted?(question?.nextQuestion?.thinkingTime):`${check360.thinkTime} `} marginBottom={responsive.isMobile ? '0.5rem' : '1rem'} />
      <DetailBlock name={'Retake:'} value={practiceMode?"Unlimited":(question?.nextQuestion?.retakes)?question.nextQuestion?.retakes:'Unlimited'} />
      {/* <DetailBlock name={'Time to Ans:'} value={`${timeToAns}s`} marginBottom={responsive.isMobile ? '0.5rem' : '1rem'} />
      <DetailBlock name={'Thinking Time:'} value={} marginBottom={responsive.isMobile ? '0.5rem' : '1rem'} />
      <DetailBlock name={'Retake:'} value={practiceMode?"Unlimited":(question?.nextQuestion?.retakes)?question.nextQuestion?.retakes:'Unlimited'} /> */}
    </Container>
  );
};

const BlockContainer = styled('div')({
  background: 'rgba(73, 73, 73, 0.51)',
  padding: '0.4rem',
  borderRadius: '0.63rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  columnGap: '2rem',
});

const DetailBlock = ({ name, value, marginBottom }) => {
  return (
    <BlockContainer style={{ marginBottom }}>
      <CustomAllTypography variant={'body2'} name={name} style={{ alignItems: 'center' }} />
      <CustomAllTypography variant={'body2'} name={value} style={{ alignItems: 'center' }} />
    </BlockContainer>
  );
};

export default RecordInfo;
