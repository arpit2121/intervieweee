import { useState } from 'react';
import { MenuItem, Select } from '@mui/material';
import { styled } from "@mui/material";

const CustomSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  height: '3.5rem',
  borderRadius: '1rem',
  padding: '8px',
  color: '#333',
  fontSize: '16px',
}));

const CustomDropDown = (props) => {
  const menu = props.menu || [];
  const [value, setValue] = useState('');

  const handleChangeSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
        <CustomSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={props.label}
          onChange={handleChangeSelect}
          sx={{ background: 'none' }}
        >
          {menu.map((menuItem, index) => (
            <MenuItem key={index} value={menuItem.value}>
              {menuItem.label}
            </MenuItem>
          ))}
        </CustomSelect>
    </div>
  );
};

export default CustomDropDown;
