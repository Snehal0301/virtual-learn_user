import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    ptime:''
};


export const pauseTimeReducer = createSlice({
    name: 'pauseTime',
    initialState,
    reducers: {
        pauseTimeState: (state, { payload }) => {
            state.ptime = payload
        },
    },
});

export const { pauseTimeState } = pauseTimeReducer.actions;
export default pauseTimeReducer.reducer;