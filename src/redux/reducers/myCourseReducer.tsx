import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    tab: 1,
    accordian: 1,
    mycoursetab: 1,
    hometab: 1,
    videoLink: 'https://youtu.be/Tn6-PIqc4UM'
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
        },
        homeTabToggleState: (state, { payload }) => {
            state.hometab = payload
        },
        videoLinkState: (state, { payload }) => {
            state.videoLink = payload
        }
    },
});

export const { tabToggleState, accordianToggleState, mycoursetabToggleState, homeTabToggleState, videoLinkState } = mycourseReducer.actions;
export default mycourseReducer.reducer;