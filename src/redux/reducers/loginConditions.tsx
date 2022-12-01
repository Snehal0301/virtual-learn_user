import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  value: false,
  passChange: false,
  successPassChange: false,
}

export const showLoginConditions = createSlice({
  name: 'loginConditions',
  initialState,
  reducers: {
    otpPage: (state, action) => {
      state.value = action.payload
    },
    changePassword: (state, action) => {
      state.passChange = action.payload
    },
    passChangeSuccess: (state, action) => {
      state.successPassChange = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  otpPage,
  changePassword,
  passChangeSuccess,
} = showLoginConditions.actions

export default showLoginConditions
