import React from 'react';
import {styled} from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CustomDropdown = styled(FormControl)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width:'100%'
}));

const DropdownInput = ({ label, options, ...props }) => {
  return (
    <CustomDropdown variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </CustomDropdown>
  );
};

export default DropdownInput;


{/* <DropdownInput placeholder={'position'} options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]}/> */}