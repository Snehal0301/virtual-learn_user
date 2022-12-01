import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  value: false,
}

export const showLoginConditions = createSlice({
  name: 'loginConditions',
  initialState,
  reducers: {
    otpPage: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { otpPage } = showLoginConditions.actions

export default showLoginConditions
