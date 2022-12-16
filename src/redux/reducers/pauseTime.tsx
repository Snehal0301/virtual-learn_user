import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    ptime: '',
    courseID:''
};


export const pauseTimeReducer = createSlice({
    name: 'pauseTime',
    initialState,
    reducers: {
        pauseTimeState: (state, { payload }) => {
            state.ptime = payload
        },
        courseIDState: (state, { payload }) => {
            state.courseID = payload
        },
    },
});

export const { pauseTimeState, courseIDState } = pauseTimeReducer.actions;
export default pauseTimeReducer.reducer;