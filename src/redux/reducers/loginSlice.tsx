import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { AxiosError } from 'axios'

const initialState = {
  message: '',
  data: [],
  isSuccess: false,
  isRejected: false,
  loading: false,
}

export const login: any = createAsyncThunk(
  'login/login',
  async (arg: any, { rejectWithValue }) => {
    try {
      const fetchedData: any = await axios.request({
        method: 'PUT',
        url: 'https://virtual-learning-app-java.herokuapp.com/login',
        data: arg,
      })

      return fetchedData
    } catch (err) {
      let error: any = err
      return rejectWithValue(error.response.data)
    }
  },
)

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.pending, (state, action) => {
      // Add user to the state array
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.isSuccess = true
    })
    builder.addCase(login.rejected, (state, action) => {
      state.message = action.payload
      state.loading = false
      state.isRejected = true
    })
  },
})

export default loginSlice
