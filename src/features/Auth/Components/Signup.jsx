import { useSelector, useDispatch } from "react-redux";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../authSlice";
import { SignupFormValidator } from "../../../Utils/SignupValidator";
import { Loading } from "../../../Components";
import { signupErrorReducer } from "../Reducers/SignupErrorReducer";

const initialSignUpError = {
    fullNameError: "",
    userNameError: "",
    passwordError: "",
    confirmPasswordError: "",
    emailError: "",
    agreeToError: "",
};
const initialNewUser = {
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    fullName: "",
    agreeTo: false,
};

export default function Signup() {
    const [userData, setUserData] = useState(initialNewUser);
    const [signupErrState, signupErrorDispatch] = useReducer(signupErrorReducer, initialSignUpError);

    const [togglePassword, setTogglePassword] = useState(false);
    const {
        auth: { error, isLoading },
    } = useSelector((state) => state);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function formSubmitHandler(e) {
        e.preventDefault();
        signupErrorDispatch({ type: "RESET_SIGNUP_ERRORS", payload: initialSignUpError });
        if (!SignupFormValidator(userData, signupErrorDispatch)) {
            dispatch(userSignup(userData));
        }
    }
    return (
        <div className="max-w-lg border-slate-800  rounded-md border-2 shadow-black dark:border-slate-500  px-6 py-4">
            <div className="mb-4 text-2xl font-medium text-center text-slate-700 dark:text-slate-100">Sign In</div>
            <form onSubmit={formSubmitHandler}>
                <div className="mb-3">
                    <div className="flex flex-col border border-slate-400 rounded-md px-2 py-1 focus-within:border-slate-500 ">
                        <label className="text-left text-xs	text-slate-500 dark:text-slate-300">Username</label>
                        <input
                            type="text"
                            value={userData.username}
                            onChange={(e) => setUserData((prev) => ({ ...prev, username: e.target.value }))}
                            className="focus:outline-none text-xs bg-slate-100 dark:bg-slate-800 dark:text-slate-100"
                        />
                    </div>
                    {signupErrState.userNameError ? (
                        <div className="text-xs	flex items-center mb-1 mr-0.5 text-red-400">
                            <span className="text-sm material-icons-outlined text-red-400 mr-1">report</span>
                            {signupErrState.userNameError}
                        </div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <div className="flex flex-col border border-slate-400 rounded-md px-2 py-1 focus-within:border-slate-500">
                        <label className="text-left text-xs	text-slate-500 dark:text-slate-300">Fullname</label>
                        <input
                            type="text"
                            value={userData.fullName}
                            onChange={(e) => setUserData((prev) => ({ ...prev, fullName: e.target.value }))}
                            className="focus:outline-none text-xs  bg-slate-100 dark:bg-slate-800 dark:text-slate-100"
                        />
                    </div>
                    {signupErrState.fullNameError ? (
                        <div className="text-xs	flex items-center mb-1 mr-0.5 text-red-400">
                            <span className="text-xs material-icons-outlined text-red-400 mr-1">report</span>
                            {signupErrState.fullNameError}
                        </div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <div className="flex flex-col border border-slate-400 rounded-md px-2 py-1 focus-within:border-slate-500">
                        <label className="text-left text-xs	text-slate-500 dark:text-slate-300">Email</label>
                        <input
                            type="email"
                            value={userData.email}
                            onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
                            className="focus:outline-none text-xs  bg-slate-100 dark:bg-slate-800 dark:text-slate-100"
                        />
                    </div>
                    {signupErrState.emailError ? (
                        <div className="text-xs	flex items-center mb-1 mr-0.5 text-red-400">
                            <span className="text-sm material-icons-outlined text-red-400 mr-1">report</span>
                            {signupErrState.emailError}
                        </div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <div className="flex border border-slate-400 rounded-md px-2 py-1 focus-within:border-slate-500 mb-3 items-center">
                        <div className="flex flex-col flex-1">
                            <label className="text-left text-xs text-slate-500 dark:text-slate-300">Password</label>
                            <input
                                value={userData.password}
                                type={togglePassword ? "text" : "password"}
                                onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
                                className="focus:outline-none text-xs  bg-slate-100 dark:bg-slate-800 dark:text-slate-100"
                            />
                        </div>
                        <button type="button" className="h-6" onClick={() => setTogglePassword((prev) => !prev)}>
                            <span className="material-icons-outlined text-slate-400	text-xl">
                                {togglePassword ? "visibility" : "visibility_off"}
                            </span>
                        </button>
                    </div>
                    {signupErrState.passwordError ? (
                        <div className="text-xs	flex items-center mb-1 mr-0.5 text-red-400">
                            <span className="text-sm material-icons-outlined text-red-400 mr-1">report</span>
                            {signupErrState.passwordError}
                        </div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <div className="flex border border-slate-400 rounded-md px-2 py-1 focus-within:border-slate-500 items-center">
                        <div className="flex flex-col flex-1">
                            <label className="text-left text-xs text-slate-500 dark:text-slate-300">
                                Confirm Password
                            </label>
                            <input
                                value={userData.confirmPassword}
                                type={togglePassword ? "text" : "password"}
                                onChange={(e) => setUserData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                                className="focus:outline-none text-xs  bg-slate-100 dark:bg-slate-800 dark:text-slate-100"
                            />
                        </div>
                        <button type="button" className="h-6" onClick={() => setTogglePassword((prev) => !prev)}>
                            <span className="material-icons-outlined text-slate-400	text-xl">
                                {togglePassword ? "visibility" : "visibility_off"}
                            </span>
                        </button>
                    </div>
                    {signupErrState.confirmPasswordError ? (
                        <div className="text-xs	flex items-center mb-1 mr-0.5 text-red-400">
                            <span className="text-sm material-icons-outlined text-red-400 mr-1">report</span>
                            {signupErrState.confirmPasswordError}
                        </div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <div className="flex items-center mb-0.5">
                        <input
                            type="checkbox"
                            checked={userData.agreeTo}
                            onChange={(e) => setUserData((prev) => ({ ...prev, agreeTo: e.target.checked }))}
                        />
                        <div className="text-xs ml-2 dark:text-slate-200">Agree to T & C</div>
                    </div>
                    {signupErrState.agreeToError ? (
                        <div className="text-xs	flex items-center mb-1 mr-0.5 text-red-400">
                            <span className="text-sm material-icons-outlined text-red-400 mr-1">report</span>
                            {signupErrState.agreeToError}
                        </div>
                    ) : null}
                </div>
                <button
                    disabled={isLoading}
                    className="bg-primary-color rounded-full w-full py-1.5 my-2 text-slate-100 font-medium"
                >
                    {isLoading ? <Loading /> : "Sign up"}
                </button>

                {error ? <div className="text-rose-500 text-sm text-center font-medium py-1">{error}</div> : null}
                <div className="mt-4 text-sm font-light dark:text-slate-100 text-center">
                    Already have an account?
                    <button className="text-primary-color font-medium ml-1" onClick={() => navigate("/auth/login")}>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
}
