import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  value: false,
  drawer: false,
  profile: false,
  notification: false,
  settings: false,
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
    profileSection: (state, { payload }) => {
      state.profile = payload
    },
    notificationSection: (state, { payload }) => {
      state.notification = payload
    },
    settingsSection: (state, { payload }) => {
      state.settings = payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { headerProfile, profileDrawer, profileSection, notificationSection, settingsSection } =
  showHeaderProfile.actions;

export default showHeaderProfile.reducer;
