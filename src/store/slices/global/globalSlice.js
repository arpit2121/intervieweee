
import { createSlice } from '@reduxjs/toolkit'


export const globalSlice = createSlice({
  name: 'global',
  initialState:{
    isLoading: false,
  },
  reducers: {
    setLoading: (state, action) => {
        state.isLoading = action.payload;
      },
  },
  
})

// Action creators are generated for each case reducer function
export const { setLoading, setError, clearError} = globalSlice.actions

export default globalSlice.reducer