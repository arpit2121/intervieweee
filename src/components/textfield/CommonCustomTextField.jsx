import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import CustomAllTypography from '../typography/CustomTypography';
import ErrorIcon from '../icons/textfield/ErrorIcon';
import WarningIcon from '../icons/textfield/WarningIcon';
import SuccessIcon from '../icons/textfield/SuccessIcon'
import LoadingIcon from '../icons/textfield/LoadingIcon'

const CommonCustomizedTextField = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      padding: '1rem 1.25rem',
      borderRadius: '14px',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      outline: 'none', 
      backgroundColor: '#F7F7FD',
    },
    icons: {
      color: '#212121',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerHover: {
      '&:hover': {
        border: '1px solid #E8E6F8',
      },
    },
    containerFocus: {
      '&:focus-within': {
        border: '1px solid #605DEC',
      },
    },
    warning: {
      border: '1px solid #FFEAC1',
    },
    error: {
      border: '1px solid #FFD8D8',
    },
    errorBg: {
      backgroundColor: '#FFD8D8', // Red background color for error
    },
    warningBg: {
      backgroundColor: '#FFEAC1', // Yellow background color for warning
    },
    textBox:{
      height: '1.5rem', 
      width: '100%',
      borderRadius: '14px',
      border:'none',
      outline: 'none',
      color: '#212121',
      paddingLeft: props.startIcon ? '0.62rem' : '0',
      paddingRight: props.endIcon ? '0.62rem' : '0',
    },
    textfieldStatusBox :{
      paddingTop : '0.5rem',
      height:'1rem',
      display:'flex',
      alignItems:'center'
    }
  }));

  const classes = useStyles();

  const inputRef = React.createRef();

  const [isFocused, setIsFocused] = useState(false);

  const statusMessage = 'status-message'
  const [ textfieldStatus,setTextfieldStatus] = useState({
    loading:false,
    warning:false,
    error:false,
    success:false
  })

  const shouldRenderStatusDiv = () => {
    return textfieldStatus.error || textfieldStatus.warning || textfieldStatus.success || textfieldStatus.loading;
  };

  const getIconComponent = () => {
    if (textfieldStatus.error) {
      return <ErrorIcon width="16px" height="16px"  style={{paddingRight:'0.5rem'}}/>
    } else if (textfieldStatus.warning) {
      return <WarningIcon src={WarningIcon} alt="Warning  Icon" width="16px" height="16px"  style={{paddingRight:'0.5rem'}}/>
    } else if (textfieldStatus.success) {
      return <SuccessIcon img src={SuccessIcon} alt="Success Icon" width="16px" height="16px" style={{paddingRight:'0.5rem'}} />
    } else if (textfieldStatus.loading) {
      return <img src={LoadingIcon} alt="Loading Icon" width="16px" height="16px"  style={{paddingRight:'0.5rem'}}/>
    } else {
      return null;
    }
  };
  const getFieldStatus = () => {
    if (textfieldStatus.error) {
      return 'Error'
    } else if (textfieldStatus.warning) {
      return 'Warning'
    } else if (textfieldStatus.success) {
      return 'Success'
    } else if (textfieldStatus.loading) {
      return 'Loading'
    } else {
      return null;
    }
  };
  const handleFocus = (event) => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    props.setData(e.target.value);
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div
        className={`${classes.container} ${classes.containerHover} ${classes.containerFocus} ${classes.errorBg}`}
        onClick={handleClick}
      >
        {props.startIcon}

        <input
          onChange={handleChange}
          type="text"
          label={props.title}
          value={props.data}
          placeholder={props.name}
          ref={inputRef}
          className={`${classes.textBox} ${classes.errorBg}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete='true'
        />

        {props.endIcon && (
          <div className={classes.icons} style={{ padding: '0 0 0 0.62rem' }}>
            <img src={props.endIcon} alt="End Icon" width="15px" height="15px" />
          </div>
        )}
      </div>
      {
        shouldRenderStatusDiv() ?
        <div className={classes.textfieldStatusBox}>
          {getIconComponent()}
          <CustomAllTypography  name={getFieldStatus()} variant={'caption'} color={'#AAAAAA'}/>
        </div> : ''
      }
    </div>
  );
};

export default CommonCustomizedTextField;