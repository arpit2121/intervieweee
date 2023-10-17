import React from 'react';
import CustomAllTypography from '../typography/CustomTypography';
import ProfileIcon from '../icons/QuestionTab/ProfileIcon';
import useResponsiveStyles from '../../utils/MediaQuery';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material';

const QuestionTabContainer = styled('div')(({ isMobile }) => ({
  maxWidth: isMobile ? '18rem' : '26rem',
  width: 'max-content',
  position: 'absolute',
  bottom: '1.94rem',
  left: isMobile ? '50%' : '2.5rem',
  transform: isMobile ? 'translateX(-50%)' : '',
}));

const QuestionTag = styled('div')({
  borderRadius: '4.15625rem',
  background: '#B1FBE5',
  display: 'flex',
  alignItems: 'center',
});

const ProfileIconWrapper = styled('div')(({ responsive }) => ({
  background: '#B1FBE5',
  borderRadius: '4.15625rem',
  padding: responsive.isMobile ? '0.6rem' : responsive.isTablet ? '0.8rem' : '1.4rem',
}));

const QuestionContent = styled('div')(({ responsive }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: responsive.isMobile ? '1rem' : '2.88rem',
}));

const QuestionTab = () => {
  const responsive = useResponsiveStyles();

  const { is360RecordingCompleted,  question, isAllQuestionsAttempted,totalQuestions } = useSelector(
    (state) => state.rootReducer.interviewPage
  );

  if (!is360RecordingCompleted ) {
    return null;
  }else if(isAllQuestionsAttempted){
    return null;
  }

  const Question = question.questionTitle;
  const TotalQuestions = totalQuestions;

  return (
    <QuestionTabContainer isMobile={responsive.isMobile}>
      <CustomAllTypography
        variant={'body2'}
        name={`Question ${question.currentIndex+1}/${question.totalQuestions}`}
        style={{ paddingLeft: '0.8rem' }}
      />
      <QuestionTag>
        <ProfileIconWrapper responsive={responsive}>
          <ProfileIcon />
        </ProfileIconWrapper>
        <QuestionContent responsive={responsive}>
          <CustomAllTypography variant={'body2'} name={`Q${question.currentIndex+1}:`} />
          <CustomAllTypography variant={'body2'} name={question?.nextQuestion?.questionTitle} />
        </QuestionContent>
      </QuestionTag>
    </QuestionTabContainer>
  );
};

export default QuestionTab;
