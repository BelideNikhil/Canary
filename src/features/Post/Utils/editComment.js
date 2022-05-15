import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editComment = createAsyncThunk(
    "/post/editComment",
    async ({ postId, token, commentData }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post(
                `/api/comments/edit/${postId}/${commentData._id}`,
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
