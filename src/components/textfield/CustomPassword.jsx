import React from "react";
import { Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { styled } from "@mui/material";
import { PiEyeClosedBold } from "react-icons/pi";
import { useState } from "react";

const CustomTextField = styled(TextField)`
  .MuiInputLabel-root {
    position: relative;
    transform: translate(10px, 3px) scale(1);
    padding: 0px;
    font-size: 8px;
    pointer-events: none;
    color: #9D99AC;
    transition: color 0.3s;
    width: 60px;
  }

  &:hover .MuiInputLabel-root {
    color: #9D99AC;
  }

  .MuiInputBase-root {
    position: relative;
    font-size: 18px;
    color: #212121;
    background-color: #F7F7FD;
    border-radius: 80px;
    height: 60%;
    z-index: 1;
    &::before {
      content: none;
    }
    &:hover {
      background-color: #F7F7FD;
    }

    &::focus-within {
      &::after {
        border-color: purple; /* Change border color on focus */
        background-color: #F7F7FD;
      }
    }
  }

  &:focus-within .MuiInputLabel-root {
    color: #9D99AC; /* Change label color on focus */
  }
`;



const CustomPassword = (props) => {
  const [type, setType] = useState(true)
  const handleChange = (e) =>{
    console.log(props.data)
    props.setData(e.target.value)
  }

  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
    return regex.test(password);
  };
  

  return (
    <div>
      <CustomTextField
        id="filled-basic"
        variant="filled"
        value={props.data}
        placeholder="Enter Text"
        fullWidth
        type={type?'password':'text'}
        label={props.title}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          disableUnderline: true,
            endAdornment: <InputAdornment position="end"><PiEyeClosedBold onClick={()=>setType(!type)}/></InputAdornment>,
        }}
        style={{
          borderRadius: "14px",
          width: "100%",
          height: "50px",
          backgroundColor: "#F7F7FD",
          border: '1px solid #605DEC'
        }}
        onChange={handleChange}
      ></CustomTextField>
      {isPasswordValid?'':'password must contain only alphanumeric'}
    </div>
  );
};

export default CustomPassword;
