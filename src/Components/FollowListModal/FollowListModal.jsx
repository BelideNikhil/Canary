import { UserAvatar } from "../index";

export default function FollowListModal({ setFollowModal, followModal }) {
    const { list, title } = followModal;

    return (
        <div className="fixed inset-0 bg-modal-background flex justify-center items-center ">
            <div
                className="rounded-md bg-slate-200 dark:bg-slate-700 h-max w-11/12 max-w-xs	md:max-w-md mt-6 p-4"
                onClick={(e) => e.stopPropagation()}
            >
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
                                className="flex justify-between items-center cursor-pointer my-2 px-3 py-1"
                                key={user._id}
                            >
                                <UserAvatar username={user.username} setFollowModal={setFollowModal} />
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
