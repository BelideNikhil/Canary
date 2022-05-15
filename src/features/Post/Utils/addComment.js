import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addComment = createAsyncThunk(
    "/post/addComment",
    async ({ postId, token, commentData }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post(
                `/api/comments/add/${postId}`,
                { commentData },
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
    }
);
