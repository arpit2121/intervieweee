import React,{useState} from "react";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import { TextDescription } from "../components/typography/Fields";
import useResponsiveStyles from "../utils/MediaQuery";
import { CustomInputButton } from "../components/button/CustomButoon";
import CustomPassword from "../components/textfield/CustomPassword";

const Password = () => {
  const [newUser, setNewUser] = useState(true);
  const [pass, setPass] = useState('');
  const responsive = useResponsiveStyles();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ height: "15%" }}>
        <CustomAllTypography
          variant={"h1"}
          name={newUser ? "Set Password" : "Forget Password?"}
        />
        <TextDescription responsive={responsive}>{newUser?'for youremail@example.com':'Enter your password for youremail@example.com'}</TextDescription>
      </div>
      <div>
        <CustomPassword title={'Enter Password'} data={pass} setData={setPass}/>
        <div style={{display:'flex', justifyContent:'flex-end', paddingTop:'4px'}}>
        <TextDescription responsive={responsive} size={'9px'} color={'#605DEC'} onClick={()=>console.log("hi")}>Forgot Password?</TextDescription>
        </div>
      </div>
      <div>
      <CustomInputButton variant="contained" responsive>Register</CustomInputButton>
      </div>
    </div>
  );
};

export default Password;
