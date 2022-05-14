import { createSlice } from "@reduxjs/toolkit";
import { newPost, deletePost, allPosts, editPost, likePost, dislikePost, getPost } from "./Utils";

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
    [likePost.fulfilled]: (state, { payload }) => {
        state.error = "";
        state.posts = payload;
    },
    [likePost.rejected]: (state, { payload }) => {
        state.error = payload;
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
        state.error = "";
        state.posts = payload;
    },
    [dislikePost.rejected]: (state, { payload }) => {
        state.error = payload;
    },
    [getPost.pending]: (state) => {
        state.isLoading = true;
    },
    [getPost.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.error = "";
        state.singlePost = payload;
    },
    [getPost.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
    },
};

export const postSlice = createSlice({
    name: "post",
    initialState: { posts: [], isLoading: false, error: "", singlePost: null },
    reducers: {
        cleanSinglePost: (state) => {
            state.singlePost = null;
        },
    },
    extraReducers,
});

export const { cleanSinglePost } = postSlice.actions;

export default postSlice.reducer;
