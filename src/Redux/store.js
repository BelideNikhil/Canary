import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import postReducer from "../features/Post/postSlice";
import userReducer from "../features/User/userSlice";

export const store = configureStore({
    reducer: { auth: authReducer, post: postReducer, user: userReducer },
});
