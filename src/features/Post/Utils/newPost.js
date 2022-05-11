import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const newPost = createAsyncThunk("/post/newPost", async ({ postData, token }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.post(
            "/api/posts",
            { postData },
            {
                headers: { authorization: token },
            }
        );
        if (status === 201) {
            return data.posts;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
