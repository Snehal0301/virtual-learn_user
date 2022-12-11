import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  value: {
    categoryId: [],
    chapterStartCount: [],
    chapterEndCount: [],
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, action) => {
      state.value.categoryId.push(action.payload.catId);
      state.value.chapterStartCount.push(action.payload.start);
      state.value.chapterEndCount.push(action.payload.end);
    },
    clearFilter: (state) => {
      state.value.categoryId = [];
      state.value.chapterStartCount = [];
      state.value.chapterEndCount = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { filter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;
