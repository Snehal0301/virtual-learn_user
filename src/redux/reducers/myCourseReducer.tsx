import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    tab: 1,
    accordian: 1,
    mycoursetab:1,
};

export const mycourseReducer = createSlice({
    name: 'mycourse',
    initialState,
    reducers: {
        tabToggleState: (state, { payload }) => {
            state.tab = payload
        },
        mycoursetabToggleState: (state, { payload }) => {
            state.mycoursetab = payload
        },
        accordianToggleState: (state, { payload }) => {
            state.accordian = payload
        }
    },
});

export const { tabToggleState, accordianToggleState, mycoursetabToggleState } = mycourseReducer.actions; 
export default mycourseReducer.reducer;