import { useNavigate } from "react-router-dom";
import { UserAvatar } from "../index";

export default function FollowListModal({ setFollowModal, followModal }) {
    const navigate = useNavigate();
    const { list, title } = followModal;
    return (
        <div className="fixed inset-0 bg-modal-background flex justify-center items-center ">
            <div className="rounded-md bg-slate-200 dark:bg-slate-700 h-max w-full max-w-md	 mt-6 p-4">
                <div className="flex justify-between items-center mb-4 text-slate-800 dark:text-slate-100">
                    <div className="mr-8 font-semibold">{title}</div>
                    <button
                        className="w-6 h-6 text-slate-800 dark:text-slate-100"
                        onClick={() => setFollowModal((prev) => ({ ...prev, show: false }))}
                    >
                        <span className="material-icons-outlined">close</span>
                    </button>
                </div>
                {list.length ? (
                    list.map((user) => {
                        return (
                            <div
                                key={user._id}
                                className="flex justify-between items-center cursor-pointer my-2 px-3 py-1"
                                role="button"
                                onClick={() => {
                                    navigate(`/profile/${user.username}`);
                                    setFollowModal((prev) => ({ ...prev, show: false }));
                                }}
                            >
                                <UserAvatar user={user} />
                            </div>
                        );
                    })
                ) : (
                    <div className="my-2 text-slate-700 dark:text-slate-200">No {title}</div>
                )}
            </div>
        </div>
    );
}
