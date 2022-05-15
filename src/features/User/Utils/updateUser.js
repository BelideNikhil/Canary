import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const updateUser = createAsyncThunk("/user/updateUser", async ({ userData, token }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.post(
            "/api/users/edit",
            { userData },
            {
                headers: {
                    authorization: token,
                },
            }
        );
        if (status === 201) {
            toast.success("Profile Updated.");
            return data.user;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
