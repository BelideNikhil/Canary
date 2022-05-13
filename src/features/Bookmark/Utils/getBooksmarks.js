import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookmarks = createAsyncThunk("/user/getBookmarks", async ({ token }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.get(`/api/users/bookmark`, {
            headers: { authorization: token },
        });
        if (status === 200) {
            return data.bookmarks;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
