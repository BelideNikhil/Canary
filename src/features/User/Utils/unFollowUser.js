import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const unFollowUser = createAsyncThunk("/user/unfollow", async ({ followUserId, token }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.post(
            `/api/users/unfollow/${followUserId}`,
            {},
            {
                headers: {
                    authorization: token,
                },
            }
        );
        if (status === 200) {
            return data.bookmarks;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
