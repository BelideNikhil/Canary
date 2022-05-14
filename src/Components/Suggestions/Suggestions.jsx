import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser, getUsers } from "../../features/User/Utils";
import { UserAvatar } from "../../Components";
export default function Suggestions() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        user: { users },
        auth: { token, userDetails },
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const userData = users?.find((user) => user.username === userDetails?.username);
    const filteredUsers = users
        ?.filter((user) => !userData?.following.find((item) => item.username === user?.username))
        ?.filter((user) => user.username !== userDetails?.username);

    return (
        <div className="rounded-md bg-slate-200 dark:bg-slate-700 h-max w-max mt-6">
            {filteredUsers?.map((user) => {
                return (
                    <div
                        key={user._id}
                        className="flex justify-between items-center cursor-pointer my-2 px-3 py-1"
                        role="button"
                        onClick={() => navigate(`/profile/${user.username}`)}
                    >
                        <UserAvatar username={user.username} />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(followUser({ token, followUserId: user._id }));
                            }}
                            className="rounded-full bg-primary-color text-slate-200 px-2 py-1 text-xs font-semibold"
                        >
                            Follow
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
