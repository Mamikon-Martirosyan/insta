import { fetchPosts } from "./postsAPI";

const { createSlice, isFulfilled } = require("@reduxjs/toolkit");

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        data: []
    },
    reducers: {
        addComment(state, {payload: {postId, username, body}}) {
            const idx = state.data.findIndex(post => post.id === postId)
            state.data[idx].comments.push({
                id: new Date().getTime().toString(),
                username, body
            })
        },
        addData(state, {payload}) {
            state.data.unshift(payload)
        }
    },

    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true
        },
        [fetchPosts.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.data = payload
        }
    }
})

export const selectPosts = state => state.posts

export const {addComment, addData} = postsSlice.actions

export const postsReducer = postsSlice.reducer