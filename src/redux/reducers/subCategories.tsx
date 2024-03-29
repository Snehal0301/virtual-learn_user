import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import type { AxiosError } from 'axios'

const initialState = {
  message: '',
  data: [],
  headers: [],
  isSuccess: false,
  isRejected: false,
  loading: false,
}

export const subCategories: any = createAsyncThunk(
  'subCategories/subCategories',
  async (arg: any, { rejectWithValue }) => {
    try {
      const fetchedData: any = await axios.request({
        method: 'get',
        url: `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/${arg}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('Token')}`,
        },
      })

      return fetchedData
    } catch (err) {
      let error: any = err
      return rejectWithValue(
        error && error.response && error.response.data && error.response.data,
      )
    }
  },
)

export const subCategoriesSlice = createSlice({
  name: 'subCategories',
  initialState,
  reducers: {
    subCategoriesisSuccess: (state) => {
      state.isSuccess = false
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(subCategories.pending, (state, action) => {
      // Add user to the state array
      state.loading = true
    })
    builder.addCase(subCategories.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.headers = action
      state.isSuccess = true
    })
    builder.addCase(subCategories.rejected, (state, action) => {
      state.message = action.payload
      state.data = []
      state.loading = false
      state.isRejected = true
    })
  },
})

export const { subCategoriesisSuccess } = subCategoriesSlice.actions

export default subCategoriesSlice
