import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../../common/common"; 
import config from "../../../common/config";
export const fetchProfessions = createAsyncThunk('professions', async (params, { rejectWithValue }) => {
    try {
        const data =
        await get(
          `${config.interviewService}/v1/admin/professions`
        )
        console.log("From FETCH MY PROFESSIONS----->", data.data)
    return data
  } catch (error) {
    console.log("ERROR in FETCH PROFESSIONS",error)
    return rejectWithValue(error.response.data)
  }
})
