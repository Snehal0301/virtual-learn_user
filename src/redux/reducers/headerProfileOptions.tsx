import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  value: false,
  drawer: false,
  searchFocused: false,
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
    searchFocus: (state, action) => {
      state.searchFocused = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { headerProfile, profileDrawer, searchFocus } =
  showHeaderProfile.actions;

export default showHeaderProfile.reducer;
