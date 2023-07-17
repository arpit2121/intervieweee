import React from 'react';
import { styled } from '@mui/system';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

export const CustomSearchInput = styled(TextField)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

const SearchInput = ({ ...props }) => {
  return (
    <CustomSearchInput
      variant="outlined"
      placeholder={props.placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default SearchInput;
