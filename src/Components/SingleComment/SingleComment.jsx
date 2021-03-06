import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { CommentOptionsModal, UserAvatar } from "../index";
import { useClickOustide } from "../../Hooks/useClickOutside";
import { GetPostDate } from "../../Utils";

export default function SingleComment({ comment, post }) {
    const [showCommentOptions, setCommentOptions] = useState(false);
    const {
        user: { users },
        auth: {
            userDetails: { username },
        },
    } = useSelector((state) => state);
    const currentUser = users?.find((user) => user.username === post?.username);

    const commentRef = useRef(null);

    useClickOustide(commentRef, setCommentOptions);

    return (
        <div className="border-b border-slate-400 px-4 py-3 ">
            <div className="flex justify-between">
                <div className="flex">
                    <UserAvatar username={comment.username} />
                    {post?.createdAt ? (
                        <span className="font-medium text-xs text-slate-800 dark:text-slate-100 mt-2">
                            · {GetPostDate(comment.createdAt)}
                        </span>
                    ) : null}
                </div>
                {username === comment.username ? (
                    <div className="relative" ref={commentRef}>
                        <button
                            className="w-6 h-6 text-slate-800 dark:text-slate-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCommentOptions((prev) => !prev);
                            }}
                        >
                            <span className="material-icons-outlined pointer-events-none">more_vert</span>
                        </button>
                        {showCommentOptions ? (
                            <CommentOptionsModal currentUser={currentUser} currentComment={comment} post={post} />
                        ) : null}
                    </div>
                ) : null}
            </div>
            <div className="py-2 px-4 text-slate-900 dark:text-slate-100 break-all mt-2">{comment.comment}</div>
        </div>
    );
}
