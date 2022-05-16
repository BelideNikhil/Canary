import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useClickOustide } from "../../Hooks/useClickOutside";
import UserAvatar from "../UserAvatar/UserAvatar";
import { addComment, editComment } from "../../features/Post/Utils";

export default function CommentModal({ post, setCommentModal, currentUser, currentComment }) {
    const [comment, setComment] = useState(currentComment ? currentComment.comment : "");
    const commentRef = useRef(null);
    const modalRef = useRef(null);
    const dispatch = useDispatch();
    const { token, userDetails } = useSelector((state) => state.auth);

    function focusHandler() {
        commentRef.current && commentRef.current.focus();
    }

    function commentSubmitHandler(e) {
        e.preventDefault();
        if (comment.trim()) {
            if (currentComment?._id) {
                dispatch(editComment({ token, postId: post._id, commentData: { ...currentComment, comment } }));
            } else {
                dispatch(addComment({ token, postId: post._id, commentData: { comment } }));
            }
        }
        setComment("");
        setCommentModal(false);
    }

    useClickOustide(modalRef, setCommentModal);

    useEffect(() => {
        commentRef.current.textContent = comment;
    }, [comment]);
    return (
        <div className="fixed inset-0 bg-modal-background z-10 flex w-full justify-center items-center">
            <div
                ref={modalRef}
                className=" pt-4 pb-2 px-3 border-y border-slate-500 rounded-md w-11/12 max-w-xs md:max-w-md bg-slate-100 dark:bg-slate-700"
                onClick={focusHandler}
            >
                <div className="font-medium text-sm text-slate-800 dark:text-slate-100 mb-2">Replying to</div>
                <UserAvatar username={currentUser?.username} />
                <div className="h-8 border-l-2 border-slate-500 ml-6 my-2"></div>
                <UserAvatar username={userDetails?.username} />
                <form onSubmit={commentSubmitHandler} className="mt-4 pl-2">
                    <div
                        ref={commentRef}
                        contentEditable
                        role="textbox"
                        placeholder=""
                        onInput={(e) => setComment(e.currentTarget.textContent)}
                        className="outline-none empty:before:content-['Reply....'] empty:before:text-slate-400 before:text-sm text-slate-900 dark:text-slate-100"
                    />
                    <div className="flex justify-end">
                        <button
                            onClick={() => setCommentModal(false)}
                            className="disabled:cursor-not-allowed mr-4 disabled:opacity-40 rounded-full font-medium text-xs my-2 text-slate-800 dark:text-slate-200"
                        >
                            Cancel
                        </button>
                        <button
                            disabled={!comment.trim()}
                            className="disabled:cursor-not-allowed text-sm disabled:opacity-40 bg-primary-color rounded-full px-5 py-0.5 my-2 text-slate-100"
                        >
                            Comment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
