import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  value: false,
};

export const showHeaderProfile = createSlice({
  name: 'headerProfile',
  initialState,
  reducers: {
    headerProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { headerProfile } = showHeaderProfile.actions;

export default showHeaderProfile.reducer;
