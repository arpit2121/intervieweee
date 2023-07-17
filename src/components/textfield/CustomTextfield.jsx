import React from "react";
import { Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { styled } from "@mui/material";
import { PiEyeClosedBold } from "react-icons/pi";
import { useEffect } from "react";

const CustomTextField = styled(TextField)`
  .MuiInputLabel-root {
    position: relative;
    transform: translate(10px, 3px) scale(1);
    padding: 0px;
    font-size: 12px;
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
    color: #605DEC; /* Change label color on focus */
  }
`;



const NormalCustomTextField = (props) => {


  const handleChange = (e) =>{
    props.setData(e.target.value)
  }


  return (
    <div>
      <CustomTextField
        id="filled-basic"
        variant="filled"
        type="text"
        fullWidth
        label={props.title}
        value={props.data}
        name="email"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          disableUnderline: true,
        }}
        style={{
          borderRadius: "14px",
          width: "100%",
          height: "50px",
          backgroundColor: "#F7F7FD",
          "&::hover": {
            borderColor: "purple",
          },
          "&::focused":{
            backgroundColor:'#605DEC'
          }
        }}
        onChange={handleChange}
      ></CustomTextField>
    </div>
  );
};

export default NormalCustomTextField;
