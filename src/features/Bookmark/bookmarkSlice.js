import { createSlice } from "@reduxjs/toolkit";
import { getBookmarks, addToBookmark, removeFromBookmark } from "./Utils";

export const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState: { isLoading: false, error: "", bookmarks: [] },
    reducers: {},
    extraReducers: {
        [getBookmarks.pending]: (state) => {
            state.isLoading = true;
        },
        [getBookmarks.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.bookmarks = payload;
            state.users = state.error = "";
        },
        [getBookmarks.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        [addToBookmark.fulfilled]: (state, { payload }) => {
            state.bookmarks = payload;
            state.error = "";
        },
        [addToBookmark.rejected]: (state, { payload }) => {
            state.error = payload;
        },
        [removeFromBookmark.fulfilled]: (state, { payload }) => {
            state.bookmarks = payload;
            state.error = "";
        },
        [removeFromBookmark.rejected]: (state, { payload }) => {
            state.error = payload;
        },
    },
});

export default bookmarkSlice.reducer;
