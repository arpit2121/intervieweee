import { InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'


const BlackBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: green;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #605DEC;
    }
  }
  & .MuiInputBase-root {
    height: 40px; /* Adjust the height as per your requirement */
    border-radius: 14px;
  }
`;

const SimpleTextField = (props) => {

  // const [placeHolder, label] = props
  const [showPass, setShowPass] = useState(true)

  return (
    <div style={{paddingBottom:'20px'}}>
        <BlackBorderTextField type={'text'} variant='outlined' placeholder={props.placeHolder} sx={{width:'100%'}} />
    </div>
  )
}

export default SimpleTextField