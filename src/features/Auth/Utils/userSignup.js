import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const userSignup = createAsyncThunk(
    "auth/signup",
    async ({ username, password, email, fullName }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post("/api/auth/signup", { username, password, email, fullName });

            if (status === 201) {
                toast.success(`Welcome to Canary, ${data.createdUser.username}`);
                localStorage.setItem(
                    "Canary_User",
                    JSON.stringify({ token: data.encodedToken, userDetails: data.createdUser })
                );
                return data;
            }
        } catch (error) {
            return rejectWithValue(error.response.data.errors[0].split(".")[0]);
        }
    }
);
