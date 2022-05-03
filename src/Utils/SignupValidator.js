export function SignupFormValidator(user, signupErrorDispatch) {
    const { fullName, email, password, confirmPassword, agreeTo, username } = user;
    let errorFlag = false;

    if (fullName.trim() === "" || !/^[a-zA-Z]+(\s*\w*)*$/.test(fullName)) {
        signupErrorDispatch({ type: "SET_FULLNAME_ERROR", payload: { error: "Please enter valid First name" } });
        errorFlag = true;
    }
    if (username.trim() === "" || !/^[a-zA-Z]+(\s*\w*)*$/.test(username)) {
        signupErrorDispatch({ type: "SET_USERNAME_ERROR", payload: { error: "Please enter valid username" } });
        errorFlag = true;
    }
    if (email === "" || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        signupErrorDispatch({ type: "SET_EMAIL_ERROR", payload: { error: "Please enter valid email" } });
        errorFlag = true;
    }
    if (password === "" || !/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})$/.test(password)) {
        signupErrorDispatch({
            type: "SET_PASSWORD_ERROR",
            payload: {
                error: "Must be 8 char's long & have one Caps, Number & Symbol.",
            },
        });
        errorFlag = true;
    }
    if (confirmPassword === "" || password !== confirmPassword) {
        signupErrorDispatch({ type: "SET_CONFIRM_PASSWORD_ERROR", payload: { error: "Passwords do not match." } });
        errorFlag = true;
    }
    if (!agreeTo) {
        signupErrorDispatch({ type: "SET_AGREE_ERROR", payload: { error: "Please agree to T & C." } });
        errorFlag = true;
    }
    return errorFlag;
}
