import { useNavigate } from "react-router-dom";

export default function UserAvatar({ user }) {
    const navigate = useNavigate();
    return (
        <div
            className="flex items-center mr-2"
            role="button"
            onClick={(e) => {
                e.stopPropagation();
                navigate(`/profile/${user.username}`);
            }}
        >
            {user.profileUrl ? (
                <img
                    src={user.profileUrl}
                    alt={user.fullName}
                    className="rounded-full w-12 h-12 mr-2 border-2 border-primary-color"
                />
            ) : (
                <div className="rounded-full w-9 h-9 bg-slate-500 text-slate-50 font-medium flex justify-center items-center">
                    {user.username[0].toUpperCase()}
                </div>
            )}
            <div>
                <div className="text-xs font-semibold mb-1 text-slate-800 dark:text-slate-100">{user.fullName}</div>
                <div className="text-xs text-slate-700 dark:text-slate-200">@{user.username}</div>
            </div>
        </div>
    );
}
