import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const followUser = createAsyncThunk("/user/followUser", async ({ followUserId, token }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.post(
            `/api/users/follow/${followUserId}`,
            {},
            {
                headers: { authorization: token },
            }
        );
        if (status === 200) {
            toast.success(`Now Following ${data.followUser.username}`);
            return data;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0].split(".")[0]);
    }
});
