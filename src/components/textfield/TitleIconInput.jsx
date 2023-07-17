import React from 'react';
import {styled} from '@mui/material';
import { TextField, InputAdornment } from '@mui/material';

const CustomInput = styled(TextField)(({ disabled }) => ({
  '& .MuiOutlinedInput-root': {
    position: 'relative',
    '& fieldset': {
      borderColor: disabled ? '#bdbdbd' : '#605DEC',
      borderWidth: '1px',
    },
    '& .MuiInputBase-input': {
      paddingLeft: '32px',
      height: '12px',
      fontSize: '14px',
    },
  },
  '& .MuiInputLabel-root': {
    position: 'absolute',
    top: '0px',
    left: '8px',
    pointerEvents: 'none',
    color: disabled ? '#C5C0DB' : '#000000',
    transform: 'translate(0, 10px) scale(1)',
    transition: 'transform 0.2s ease-in-out',
    '&.Mui-focused': {
      color: '#605DEC',
      transform: 'translate(0, 0) scale(0.42)',
    },
  },
  '&:hover .MuiInputLabel-root': {
    color: '#605DEC',
  },
}));

const TitleInput = () => {
  return (
    <div>
      <CustomInput
        title='name'
        variant="filled"
        label="mail"
        disabled={false}
        autoComplete="off"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end"></InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default TitleInput;
