import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSignup = createAsyncThunk("auth/signup", async ({ username, password }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.post("/api/auth/signup", { username, password });
        if (status === 201) {
            localStorage.setItem(
                "Canary_User",
                JSON.stringify({ token: data.encodedToken, userDetails: data.createdUser })
            );
            return data;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
