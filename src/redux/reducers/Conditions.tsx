import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  value: false,
  passChange: false,
  successPassChange: false,
  otpReg: false,
  personalDetails: false,
  successReg: false,
  quizModal: false,
  certificate: false,
};

export const showLoginConditions = createSlice({
  name: 'loginConditions',
  initialState,
  reducers: {
    otpPage: (state, action) => {
      state.value = action.payload;
    },
    changePassword: (state, action) => {
      state.passChange = action.payload;
    },
    passChangeSuccess: (state, action) => {
      state.successPassChange = action.payload;
    },
    registerOtp: (state, action) => {
      state.otpReg = action.payload;
    },
    registerPersonalDetails: (state, action) => {
      state.personalDetails = action.payload;
    },
    registerSuccess: (state, action) => {
      state.successReg = action.payload;
    },
    showQuizModal: (state, action) => {
      state.quizModal = action.payload;
    },
    showCertificate: (state, action) => {
      state.quizModal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  otpPage,
  changePassword,
  passChangeSuccess,
  registerOtp,
  registerPersonalDetails,
  registerSuccess,
  showQuizModal,
  showCertificate,
} = showLoginConditions.actions;

export default showLoginConditions;
