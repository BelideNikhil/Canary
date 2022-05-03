import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
    const { token } = useSelector((state) => state.auth);
    const location = useLocation();

    return token ? <Outlet /> : <Navigate to="/auth/login" state={{ from: location }} replace />;
}
