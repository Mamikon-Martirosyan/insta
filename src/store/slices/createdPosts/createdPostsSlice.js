import { createSlice } from "@reduxjs/toolkit";

const createdPostsSlice = createSlice({
    name: 'createdPosts',
    initialState: [],
    reducers: {
        addCrPosts(state, {payload}) {
            state.push(payload)
        }
    }
})

export const selectCrPosts = state => state.createdPosts


export const {addCrPosts} = createdPostsSlice.actions

export const createdPostsReducer = createdPostsSlice.reducer