import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  value: false,
  drawer: false,
  searchFocused: false,
  profile: false,
  notification: false,
  settings: false,
  showChangePassword: false,
  editSection:true
};

export const showHeaderProfile = createSlice({
  name: "headerProfile",
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
    profileSection: (state, { payload }) => {
      state.profile = payload
    },
    notificationSection: (state, { payload }) => {
      state.notification = payload
    },
    settingsSection: (state, { payload }) => {
      state.settings = payload
    },
    showChangePasswordSection: (state, { payload }) => {
      state.showChangePassword = payload
    },
    editProfileSection: (state, { payload }) => {
      state.editSection = payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { headerProfile, profileDrawer, searchFocus, profileSection, notificationSection, settingsSection, showChangePasswordSection, editProfileSection } =
  showHeaderProfile.actions;

export default showHeaderProfile.reducer;
