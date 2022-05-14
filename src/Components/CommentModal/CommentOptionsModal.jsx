import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CommentModal } from "../index";
import { deleteComment } from "../../features/Post/Utils";

export default function CommentOptionsModal({ currentUser, currentComment, post }) {
    const [showCommentModal, setCommentModal] = useState(false);
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    return (
        <>
            <div
                className="border-2 border-slate-500 rounded-md bg-slate-100 dark:bg-slate-800 absolute top-8 right-0 z-8 bg-slate-100 p-2"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="flex items-center p-1 text-slate-700 dark:text-slate-200 text-sm font-medium	"
                    onClick={(e) => {
                        e.stopPropagation();
                        setCommentModal((prev) => !prev);
                    }}
                >
                    <span className="mr-2 material-icons-outlined">edit</span> Edit
                </button>
                <button
                    className="flex items-center p-1 text-slate-700 text-sm font-medium dark:text-slate-200"
                    onClick={(e) => {
                        e.stopPropagation();
                        dispatch(deleteComment({ commentId: currentComment._id, postId: post._id, token }));
                    }}
                >
                    <span className=" mr-2 material-icons-outlined">delete</span> Delete
                </button>
            </div>
            {showCommentModal ? (
                <CommentModal
                    setCommentModal={setCommentModal}
                    currentUser={currentUser}
                    currentComment={currentComment}
                    post={post}
                />
            ) : null}
        </>
    );
}
