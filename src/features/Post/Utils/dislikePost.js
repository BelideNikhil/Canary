import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const dislikePost = createAsyncThunk("/post/dislikePost", async ({ postId, token }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.post(
            `/api/posts/dislike/${postId}`,
            {},
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
