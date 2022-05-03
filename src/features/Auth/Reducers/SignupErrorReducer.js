export function signupErrorReducer(signupErrState, { type, payload }) {
    switch (type) {
        case "SET_USERNAME_ERROR":
            return { ...signupErrState, userNameError: payload.error };
        case "SET_FULLNAME_ERROR":
            return { ...signupErrState, fullNameError: payload.error };
        case "SET_EMAIL_ERROR":
            return { ...signupErrState, emailError: payload.error };
        case "SET_PASSWORD_ERROR":
            return { ...signupErrState, passwordError: payload.error };
        case "SET_CONFIRM_PASSWORD_ERROR":
            return { ...signupErrState, confirmPasswordError: payload.error };
        case "SET_AGREE_ERROR":
            return { ...signupErrState, agreeToError: payload.error };
        case "RESET_SIGNUP_ERRORS":
            return { ...payload };
        default:
            return signupErrState;
    }
}
