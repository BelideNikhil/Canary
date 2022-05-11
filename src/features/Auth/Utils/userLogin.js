import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk("auth/login", async ({ username, password }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.post("/api/auth/login", { username, password });
        if (status === 200) {
            localStorage.setItem(
                "Canary_User",
                JSON.stringify({ token: data.encodedToken, userDetails: data.foundUser })
            );
            return data;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
