import { styled } from '@mui/material';
import React from 'react'
import CustomAllTypography from '../typography/CustomTypography';
import ProfileIcon from '../icons/QuestionTab/ProfileIcon';
import useResponsiveStyles from '../../utils/MediaQuery';

const TotalQuestions = 1
const SelectedQuestion = 1;


const QuestionTab = () => {
    const responsive = useResponsiveStyles();

    const ProfileStyle = {
        background: '#B1FBE5',
        borderRadius: '4.15625rem',
        padding:responsive.isMobile ? '0.6rem' : responsive.isTablet? '0.8rem': responsive.isDesktop ? '1.4rem':'1rem',
    }
    const TagStyle = {
        borderRadius: '4.15625rem',
        background: '#B1FBE5',
        display: 'flex',
        alignItems: 'center'
    }
    const QuestionStyle = {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '2.88rem'
    }
    const parent = {
        maxWidth: responsive.isMobile?'21rem':'26rem',
        width:'max-content',
        position:'absolute',
        bottom:'1.94rem',
        left:responsive.isMobile ? '50%': '2.5rem',
        transform:responsive.isMobile ? 'translateX(-50%)':''
    }

    return (
        <div style={parent}>
            <CustomAllTypography variant={'body2'} name={`Question ${TotalQuestions}/${SelectedQuestion}`} style={{ paddingLeft: '0.8rem'}} />
            <div style={TagStyle}>
                <div style={ProfileStyle}>
                    <ProfileIcon />
                </div>
                <div style={QuestionStyle}>
                    <CustomAllTypography variant={'body2'} name={`Q${1}:`} />
                    <CustomAllTypography variant={'body2'} name={'Talk something about you'} />
                </div>
            </div>
        </div>
    )
}

export default QuestionTab