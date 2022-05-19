import { createSlice } from "@reduxjs/toolkit";
import {
    newPost,
    deletePost,
    allPosts,
    editPost,
    likePost,
    dislikePost,
    getPost,
    addComment,
    editComment,
    deleteComment,
    getPagedPosts,
} from "./Utils";

const extraReducers = {
    [allPosts.pending]: (state) => {
        state.isLoading = true;
    },
    [allPosts.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.error = "";
        state.posts = payload;
        state.totalPages = Math.ceil(payload.length / 4);
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
    [addComment.fulfilled]: (state, { payload }) => {
        state.error = "";
        state.posts = payload;
    },
    [addComment.rejected]: (state, { payload }) => {
        state.error = payload;
    },
    [editComment.fulfilled]: (state, { payload }) => {
        state.error = "";
        state.posts = payload;
    },
    [editComment.rejected]: (state, { payload }) => {
        state.error = payload;
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
        state.error = "";
        state.posts = payload;
    },
    [deleteComment.rejected]: (state, { payload }) => {
        state.error = payload;
    },
    [getPagedPosts.pending]: (state) => {
        state.isLoading = true;
    },
    [getPagedPosts.fulfilled]: (state, { payload }) => {
        state.pagedPosts = payload;
        state.isLoading = false;
    },
};

export const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        isLoading: false,
        error: "",
        singlePost: null,
        selectedFilter: "Latest",
        pageNum: 0,
        totalPages: 0,
        pagedPosts: [],
    },
    reducers: {
        cleanSinglePost: (state) => {
            state.singlePost = null;
        },
        setSelectedFilter: (state, { payload }) => {
            state.selectedFilter = payload;
        },
        setPageNum: (state) => {
            state.pageNum = state.pageNum + 1 > state.totalPages ? state.totalPages : state.pageNum + 1;
        },
    },
    extraReducers,
});

export const { cleanSinglePost, setSelectedFilter, setPageNum, setLoading } = postSlice.actions;

export default postSlice.reducer;
