import { Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import Login from "../features/Auth/Components/Login";
import Signup from "../features/Auth/Components/Signup";
import Home from "../Home";
import UserAuth from "../features/Auth/UserAuth";

export default function PageRoutes() {
    const { token } = useSelector((state) => state.auth);
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
            </Route>

            <Route path="/auth" element={<UserAuth />}>
                {!token ? (
                    <>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </>
                ) : (
                    <>
                        <Route path="login" element={<Navigate to="/" replace />} />
                        <Route path="signup" element={<Navigate to="/" replace />} />
                    </>
                )}
            </Route>
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
}
