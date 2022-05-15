import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserAvatar({ username }) {
    const navigate = useNavigate();
    const { users } = useSelector((state) => state.user);
    const userDetails = users?.find((user) => user.username === username);

    return (
        <div
            className="flex items-center mr-2"
            role="button"
            onClick={(e) => {
                e.stopPropagation();
                navigate(`/profile/${userDetails.username}`);
            }}
        >
            {userDetails?.profileUrl ? (
                <img
                    src={userDetails?.profileUrl}
                    alt={userDetails?.fullName}
                    className="rounded-full w-12 h-12 mr-2 border-2 border-primary-color"
                />
            ) : (
                <div className="rounded-full w-9 h-9 bg-slate-500 text-slate-50 font-medium flex justify-center items-center">
                    {userDetails?.username[0].toUpperCase()}
                </div>
            )}
            <div>
                <div className="text-xs font-semibold mb-1 text-slate-800 dark:text-slate-100">
                    {userDetails?.fullName}
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-200">@{userDetails?.username}</div>
            </div>
        </div>
    );
}
