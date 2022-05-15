import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const unFollowUser = createAsyncThunk(
    "/user/unFollowUser",
    async ({ followUserId, token }, { rejectWithValue }) => {
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
                toast.success(` ${data.followUser.username} unfollowed`);
                return data;
            }
        } catch (error) {
            return rejectWithValue(error.response.data.errors[0].split(".")[0]);
        }
    }
);
