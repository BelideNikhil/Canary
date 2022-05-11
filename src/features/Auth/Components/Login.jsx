import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Utils";

export default function Login() {
    const [userData, setUserData] = useState({ username: "", password: "" });
    const [togglePassword, setTogglePassword] = useState(false);
    const {
        auth: { error, isLoading },
    } = useSelector((state) => state);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function formSubmitHandler(e) {
        e.preventDefault();
        if (userData.username.trim() && userData.password.trim()) {
            dispatch(userLogin(userData));
        }
    }
    return (
        <div className="max-w-lg border-slate-800 border-2 shadow-black rounded-md dark:border-slate-500  px-6 py-12">
            <div className="mb-8 text-2xl font-medium text-center text-slate-700 dark:text-slate-100">
                Log in to Canary
            </div>
            <form onSubmit={formSubmitHandler}>
                <div className="flex flex-col border border-slate-400 rounded-md px-2 py-1 focus-within:border-sky-500 focus-within:border-2 mb-3">
                    <label className="text-left text-xs	text-slate-500 dark:text-slate-300">Username</label>
                    <input
                        type="text"
                        required
                        value={userData.username}
                        onChange={(e) => setUserData((prev) => ({ ...prev, username: e.target.value }))}
                        className="focus:outline-none text-sm pt-0.5 bg-slate-100 dark:bg-slate-800 dark:text-slate-100"
                    />
                </div>
                <div className="flex border border-slate-400 rounded-md px-2 py-1 focus-within:border-sky-500 focus-within:border-2 mb-3 items-center">
                    <div className="flex flex-col flex-1">
                        <label className="text-left text-xs text-slate-500 dark:text-slate-300">Password</label>
                        <input
                            required
                            value={userData.password}
                            type={togglePassword ? "text" : "password"}
                            onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
                            className="focus:outline-none text-sm pt-0.5 bg-slate-100 dark:bg-slate-800 dark:text-slate-100"
                        />
                    </div>
                    <button type="button" className="h-6" onClick={() => setTogglePassword((prev) => !prev)}>
                        <span className="material-icons-outlined text-slate-400	text-xl">
                            {togglePassword ? "visibility" : "visibility_off"}
                        </span>
                    </button>
                </div>
                <button
                    disabled={isLoading}
                    className="bg-primary-color rounded-full w-full py-1.5 my-2 text-slate-100 font-medium"
                >
                    Login
                </button>
                <button
                    disabled={isLoading}
                    className="text-slate-800 dark:text-slate-200 w-full py-1.5 text-xs font-medium flex justify-center items-center"
                    onClick={() => setUserData({ username: "Nikhil_Belide", password: "Password@123" })}
                >
                    Login as Guest
                </button>
                {error ? <div className="text-rose-500 text-sm text-center font-medium py-1">{error}</div> : null}
                <div className="mt-4 text-sm font-light dark:text-slate-100 text-center">
                    Don't have an account?
                    <button className="text-primary-color font-medium ml-1" onClick={() => navigate("/auth/signup")}>
                        Join Canary
                    </button>
                </div>
            </form>
        </div>
    );
}
