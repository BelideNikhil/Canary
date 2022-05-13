import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditModal } from "../index";
import { deletePost } from "../../features/Post/Utils";
import { followUser, unFollowUser } from "../../features/User/Utils";

export default function OptionsModal({ post }) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const {
        auth: {
            token,
            userDetails: { username },
        },
        user: { users },
    } = useSelector((state) => state);

    const loggedInUser = users?.find((user) => user.username === username);
    const currentPostUser = users?.find((user) => user.username === post.username);
    return (
        <>
            <div className="border-2 border-slate-500 rounded-md bg-slate-100 dark:bg-slate-800 absolute top-8 right-0 z-8 bg-slate-100 p-2">
                {post.username === username ? (
                    <>
                        <button
                            className="flex items-center p-1 text-slate-700 dark:text-slate-200 text-sm font-medium	"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowModal(true);
                            }}
                        >
                            <span className="mr-2 material-icons-outlined">edit</span> Edit
                        </button>
                        <button
                            className="flex items-center p-1 text-slate-700 text-sm font-medium dark:text-slate-200"
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(deletePost({ post, token }));
                            }}
                        >
                            <span className=" mr-2 material-icons-outlined">delete</span> Delete
                        </button>
                    </>
                ) : loggedInUser?.following?.find((user) => user.username === post.username) ? (
                    <button
                        onClick={() => dispatch(unFollowUser({ token, followUserId: currentPostUser._id }))}
                        className="flex items-center p-1 text-slate-700 text-sm font-medium dark:text-slate-200"
                    >
                        <span class="material-icons-outlined mr-2">person_remove</span> Unfollow
                    </button>
                ) : (
                    <button
                        onClick={() => dispatch(followUser({ token, followUserId: currentPostUser._id }))}
                        className="flex items-center p-1 text-slate-700 text-sm font-medium dark:text-slate-200"
                    >
                        <span class="material-icons-outlined mr-2">person_add</span> Follow
                    </button>
                )}
            </div>
            {showModal ? <EditModal setShowModal={setShowModal} post={post} /> : null}
        </>
    );
}
