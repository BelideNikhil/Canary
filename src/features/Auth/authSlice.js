import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userSignup } from "./Utils";
import toast from "react-hot-toast";

const localStorageData = JSON.parse(localStorage.getItem("Canary_User"));

const initialState = {
    token: localStorageData?.token || "",
    userDetails: localStorageData?.userDetails || {},
    isLoading: false,
    error: "",
};

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
            toast.success(`Logout Successful`);
            localStorage.removeItem("Canary_User");
            state.token = "";
            state.userDetails = {};
        },
    },
    extraReducers,
});

export const { userLogout } = authSlice.actions;

export default authSlice.reducer;
