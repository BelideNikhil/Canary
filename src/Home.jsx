import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "./features/Auth/authSlice";

export default function Home() {
    const { userDetails, isLoading } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div>
            <h1 className="text-slate-800 dark:text-slate-100">Home Page</h1>
            <h2 className="text-slate-800 dark:text-slate-100">Welcome {userDetails.username}</h2>
            <button
                onClick={() => {
                    dispatch(userLogout());
                    navigate("/auth/login");
                }}
                disabled={isLoading}
                className="bg-primary-color rounded-full px-3 py-1.5 my-2 text-slate-100 font-medium"
            >
                Logout
            </button>
        </div>
    );
}
