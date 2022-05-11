import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deletePost = createAsyncThunk("/post/deletePost", async ({ post, token }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.delete(`/api/posts/${post._id}`, {
            headers: { authorization: token },
        });
        if (status === 201) {
            return data.posts;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
