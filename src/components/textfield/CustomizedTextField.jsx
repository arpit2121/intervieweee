import React,{useState} from 'react'

const CustomizedTextField = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = (event) => {
      setIsFocused(true);
    };
  
    const handleBlur = (event) => {
      setIsFocused(false);
    };
    // const [isHovered, setIsHovered] = useState(false);
    // onMouseEnter={() => setIsHovered(true)}
    // onMouseLeave={() => setIsHovered(false)}
    const handleChange = (e) =>{
      props.setData(e.target.value)
    }
  
  
  return (
    <div style={{width:'100%', height:'50px', borderRadius:'14px', display:'flex',flexDirection:'column', alignItems:'flex-end', justifyContent:'center',
    border:isFocused?'1px solid #605DEC':'none',
    backgroundColor:'#F7F7FD'}} >
      <div style={{width:'100%', display:'flex', justifyContent:'center', backgroundColor:'#F7F7FD', borderTopLeftRadius:'14px', borderTopRightRadius:'14px'}}>
      <label style={{width:'90%', color:'#9D99AC'}}>name</label>
      </div>
      <input
      onChange={handleChange}
      type="text"
      label={props.title}
      value={props.data}
      style={{height:'80%', width:'95%',borderRadius:'14px',border: isFocused ? 'none' : 'none',
        outline: 'none',color:'#212121',backgroundColor:'#F7F7FD',paddingLeft:'2px'}} onFocus={handleFocus}
      onBlur={handleBlur} autoComplete='true'></input>
    </div>
  )
}

export default CustomizedTextField