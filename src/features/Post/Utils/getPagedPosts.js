import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPagedPosts = createAsyncThunk("/post/pagedPosts", async ({ pageNum }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.get(`/api/posts/page/${pageNum}`);
        if (status === 200) {
            return data.posts;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
