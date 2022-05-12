import { createSlice } from "@reduxjs/toolkit";
import { getUsers, updateUser, followUser, unFollowUser } from "./Utils";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        error: "",
        darkTheme: JSON.parse(localStorage.getItem("canary_theme")) || false,
        users: [],
    },
    reducers: {
        toggleTheme: (state, { payload }) => {
            state.darkTheme = payload;
            localStorage.setItem("canary_theme", payload);
        },
        setLoading: (state) => {
            state.isLoading = true;
        },
    },
    extraReducers: {
        [getUsers.fulfilled]: (state, { payload }) => {
            state.users = payload;
            state.error = "";
        },
        [getUsers.rejected]: (state, { payload }) => {
            state.error = payload;
        },
        [updateUser.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.users = state.users.map((user) => (user.username === payload.username ? payload : user));
            state.isLoading = false;
            state.error = "";
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        },
        [followUser.fulfilled]: (state, { payload }) => {
            state.users = state.users.map((user) =>
                user.username === payload.followUser.username ? payload.followUser : user
            );
            state.users = state.users.map((user) => (user.username === payload.user.username ? payload.user : user));
            state.error = "";
        },
        [followUser.rejected]: (state, { payload }) => {
            state.error = payload;
        },
        [unFollowUser.fulfilled]: (state, { payload }) => {
            state.users = state.users.map((user) =>
                user.username === payload.followUser.username ? payload.followUser : user
            );
            state.users = state.users.map((user) => (user.username === payload.user.username ? payload.user : user));
            state.error = "";
        },
        [unFollowUser.rejected]: (state, { payload }) => {
            state.error = payload;
        },
    },
});

export const { toggleTheme, setLoading } = userSlice.actions;

export default userSlice.reducer;
