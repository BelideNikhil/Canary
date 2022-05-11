import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        error: "",
        darkTheme: JSON.parse(localStorage.getItem("canary_theme")) || false,
    },
    reducers: {
        toggleTheme: (state, { payload }) => {
            state.darkTheme = payload;
            localStorage.setItem("canary_theme", payload);
        },
    },
});

export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
