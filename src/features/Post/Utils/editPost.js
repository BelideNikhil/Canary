import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editPost = createAsyncThunk("/post/editPost", async ({ postData, token, post }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.post(
            `/api/posts/edit/${post._id}`,
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
