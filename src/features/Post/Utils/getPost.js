import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("/post/singlePost", async ({ postId }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.get(`/api/posts/${postId}`);
        if (status === 200) {
            return data.post;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
