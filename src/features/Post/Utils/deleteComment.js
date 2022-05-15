import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteComment = createAsyncThunk(
    "/post/deleteComment",
    async ({ postId, token, commentId }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post(
                `/api/comments/delete/${postId}/${commentId}`,
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
    }
);
