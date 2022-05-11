import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const allPosts = createAsyncThunk("/post/allPosts", async (_, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.get("/api/posts");
        if (status === 200) {
            return data.posts;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
