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
    setfilter: (state, action) => {
      !state.value.categoryId.includes(action.payload.catId) &&
        state.value.categoryId.push(action.payload.catId);
    },

    removefilter: (state, action) => {
      console.log('uncaught', action.payload, state.value.categoryId);
      var index = state.value.categoryId.indexOf(action.payload);
      if (index > -1) {
        state.value.categoryId.splice(index, 1);
      }
    },
    setChapterCount: (state, action) => {
      !state.value.categoryId.includes(action.payload.start) &&
        state.value.chapterStartCount.push(action.payload.start);

      !state.value.categoryId.includes(action.payload.end) &&
        action.payload.end &&
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
export const { setfilter, clearFilter, setChapterCount, removefilter } =
  filterSlice.actions;

export default filterSlice.reducer;
