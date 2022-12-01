import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  value: false,
  drawer:false
};

export const showHeaderProfile = createSlice({
  name: 'headerProfile',
  initialState,
  reducers: {
    headerProfile: (state, action) => {
      state.value = action.payload;
    },
    profileDrawer: (state, action) => {
      state.drawer = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { headerProfile, profileDrawer } = showHeaderProfile.actions;

export default showHeaderProfile.reducer;
