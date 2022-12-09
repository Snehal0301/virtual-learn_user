import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  value: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categorydata: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { categorydata } = categorySlice.actions;

export default categorySlice.reducer;