import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const localStorageData = JSON.parse(localStorage.getItem("Canary_User"));

const initialState = {
    token: localStorageData?.token || "",
    userDetails: localStorageData?.userDetails || {},
    isLoading: false,
    error: "",
};

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

const extraReducers = {
    [userLogin.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.encodedToken;
        state.userDetails = payload.foundUser;
        state.error = "";
    },
    [userLogin.pending]: (state) => {
        state.isLoading = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
    },

    [userSignup.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.encodedToken;
        state.userDetails = payload.createdUser;
        state.error = "";
    },
    [userSignup.pending]: (state) => {
        state.isLoading = true;
    },
    [userSignup.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogout: (state) => {
            localStorage.removeItem("Canary_User");
            state.token = "";
            state.userDetails = {};
        },
    },
    extraReducers,
});

export const { userLogout } = authSlice.actions;

export default authSlice.reducer;
