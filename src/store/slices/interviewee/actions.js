import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getwithHeader, post, postWithHeader } from "../../../common/common";
import config from "../../../common/config";
import axios from "axios";

export const onboardAction = createAsyncThunk('onboard', async (params, { rejectWithValue }) => {
    console.log("INSIDE ONBOARD ACTION", params.data)
    try {
        console.log("CONFIG",config.interviewService)
        const data =
        await post(
          `${config.interviewService}/v1/interviewee`, params.data,
          {
            headers: {
           'Content-Type': 'multipart/form-data',
            },
            }
        )
        console.log("RESPONSE FROM ONBOARD",data)
    return data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

export const getJobDetails = createAsyncThunk('job/getJobDetails', async (params, { rejectWithValue }) => {
  console.log( `------->${config.interviewService}/v1/job-post/get-job-detail/${params.jobPostId}`)
  try {
      const data =
      await axios.get(
        `${config.interviewService}/v1/job-post/get-job-detail`,{
          params:{
            jobPostId: params.jobPostId,
            adminId: params.adminId
          }
        }
      )
      console.log("RESPONSE FROM GET JOB DETAILS", data)
  return data
} catch (error) {
  return rejectWithValue(error.response)
}
})


export const save360Action = createAsyncThunk('/360recording', async (params, { rejectWithValue }) => {
  console.log("INSIDE SAVE 360 ACTION", params.blob)
  try {
      const data =
      await post(
        `${config.interviewService}/v1/interviewee/upload-360/${params.jobPostId}`
      )
      console.log("RESPONSE SAVE 360 API")
  return data
} catch (error) {
  return rejectWithValue(error.response.data)
}
})

export const fetchQuestionAction = createAsyncThunk('/question', async (params, { rejectWithValue }) => {
  try {
    console.log("HELLO",params)
      const data =
      axios.get(`${config.interviewService}/v1/interviewee/question/interview`,
        { params: { intervieweeId:params.intervieweeId }, 
          headers:{ code: sessionStorage.getItem('tokenCode')}
      }
        // { params: { answer: 42 } }
      )
      // await get(/interviewee/view360/status
      //   `${config.interviewService}/interviewee/question/interview?intervieweeId=65194673a03a74b4ef3d45be`,
      //   { params: { answer: 42 } }
      // )
      console.log("RESPONSE FROM FETCH QUESTION",data.fulfilled)
  return data
} catch (error) {
  return rejectWithValue(error.response.data)
}
})

export const answerQuestion = createAsyncThunk('/answer', async (params, { rejectWithValue }) => {
  console.log("DATA FOR ANSWER", params.data)
  try {
      const data =
      await post(
        `${config.interviewService}/v1/interviewee/upload-answer`,params.data
      )
      console.log("RESPONSE FROM ANSWER QUESTION")
  return data
} catch (error) {
  return rejectWithValue(error.response.data)
}
})


export const is360Complete = createAsyncThunk('/is360', async (params, { rejectWithValue }) => {
  try {
    console.log("TOKEN", sessionStorage.getItem('tokenCode'))
      const data =
      await axios.get(
        `${config.interviewService}/v1/interviewee/view360/status`,
        { params: { intervieweeId:params.intervieweeId }, 
          headers:{ code: sessionStorage.getItem('tokenCode')}
      }
      )
      console.log("GOT RESPONSE FROM 360 Complete ",data)
  return data
} catch (error) {
  console.log("Error from Get 360 status", error)
  return rejectWithValue(error.response)
}
})
