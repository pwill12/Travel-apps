import { createSlice } from '@reduxjs/toolkit'

const travelSlice = createSlice({
    name: "travel",
    initialState: {
        jobs: [],
    },
    reducers: {
        postsaved: (state, action) => {
            state.jobs = action.payload
        },
    },
});

export const { postsaved } = travelSlice.actions;
export default travelSlice.reducer;