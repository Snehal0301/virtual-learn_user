import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    tab: false,
};

export const mycourseReducer = createSlice({
    name: 'mycourse',
    initialState,
    reducers: {
        tabToggleState: (state, { payload }) => {
            state.tab = payload
        },
    },
});

export const { tabToggleState } = mycourseReducer.actions; 
export default mycourseReducer.reducer;