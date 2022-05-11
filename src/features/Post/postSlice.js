import { createSlice } from "@reduxjs/toolkit";
import { newPost, deletePost, allPosts, editPost } from "./Utils";

const extraReducers = {
    [allPosts.pending]: (state) => {
        state.isLoading = true;
    },
    [allPosts.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.error = "";
        state.posts = payload;
    },
    [allPosts.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
    },

    [newPost.fulfilled]: (state, { payload }) => {
        state.error = "";
        state.posts = payload;
    },
    [newPost.rejected]: (state, { payload }) => {
        state.error = payload;
    },

    [editPost.fulfilled]: (state, { payload }) => {
        state.error = "";
        state.posts = payload;
    },
    [editPost.rejected]: (state, { payload }) => {
        state.error = payload;
    },

    [deletePost.fulfilled]: (state, { payload }) => {
        state.error = "";
        state.posts = payload;
    },
    [deletePost.rejected]: (state, { payload }) => {
        state.error = payload;
    },
};

export const postSlice = createSlice({
    name: "post",
    initialState: { posts: [], isLoading: false, error: "" },
    reducers: {},
    extraReducers,
});

export default postSlice.reducer;
