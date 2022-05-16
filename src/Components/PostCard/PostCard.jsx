import { useState, useRef } from "react";
import { useClickOustide } from "../../Hooks/useClickOutside";
import { UserAvatar, OptionsModal, CommentModal } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { likePost, dislikePost } from "../../features/Post/Utils";
import { addToBookmark, removeFromBookmark } from "../../features/Bookmark/Utils";
import { useNavigate } from "react-router-dom";
import { GetPostDate } from "../../Utils";

export default function PostCard({ post }) {
    const [showOptions, setShowOptions] = useState(false);
    const [showCommentModal, setCommentModal] = useState(false);

    const optionsRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        user: { users },
        auth: {
            token,
            userDetails: { username },
        },
        bookmark: { bookmarks },
    } = useSelector((state) => state);

    useClickOustide(optionsRef, setShowOptions);

    const currentUser = users?.find((user) => user.username === post.username);

    const { likeCount, likedBy } = post?.likes;
    const foundInLiked = likedBy?.find((item) => item.username === username);

    const foundInBookmarks = bookmarks?.find((bookmark) => bookmark === post._id);
    return (
        <>
            <div
                className="border-b border-slate-400 px-4 py-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700"
                onClick={() => navigate(`/post/${post.id}`)}
            >
                <div className="flex  justify-between items-center">
                    <div className="flex">
                        {currentUser ? <UserAvatar username={currentUser.username} /> : null}
                        {post?.createdAt ? (
                            <span className="font-medium text-xs text-slate-800 dark:text-slate-100 mt-2">
                                · {GetPostDate(post.createdAt)}
                            </span>
                        ) : null}
                    </div>
                    <div className="relative" ref={optionsRef}>
                        <button
                            className="w-6 h-full text-slate-800 dark:text-slate-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowOptions((prev) => !prev);
                            }}
                        >
                            <span className="material-icons-outlined hover:text-primary-color">more_vert</span>
                        </button>
                        {showOptions ? <OptionsModal post={post} /> : null}
                    </div>
                </div>
                <div className="py-2 text-slate-900 dark:text-slate-100 break-all mt-4">{post.content}</div>
                <div className="pt-3 flex justify-between mt-4">
                    <div className="flex items-center">
                        {foundInLiked ? (
                            <button
                                className=" mr-2 w-6 h-6 text-red-400 dark:text-red-500"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(dislikePost({ token, postId: post._id }));
                                }}
                            >
                                <span className="material-icons">favorite</span>
                            </button>
                        ) : (
                            <button
                                className=" mr-2 w-6 h-6 text-slate-600 dark:text-slate-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(likePost({ token, postId: post._id }));
                                }}
                            >
                                <span className="material-icons-outlined hover:text-red-400">favorite_border</span>
                            </button>
                        )}
                        {likeCount > 0 ? (
                            <span className="font-medium text-slate-800 dark:text-slate-200">{likeCount}</span>
                        ) : null}
                    </div>
                    <div className="flex items-center">
                        <button
                            className=" mr-2 w-6 h-6 text-slate-600 dark:text-slate-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCommentModal(true);
                            }}
                        >
                            <span className="material-icons-outlined hover:text-emerald-500	">question_answer</span>
                        </button>
                        {post?.comments?.length > 0 ? (
                            <span className="font-medium text-slate-800 dark:text-slate-200">
                                {post.comments.length}
                            </span>
                        ) : null}
                    </div>
                    {foundInBookmarks ? (
                        <button
                            className=" mr-2 w-6 h-6 text-primary-color"
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(removeFromBookmark({ token, postId: post._id }));
                            }}
                        >
                            <span className="material-icons">bookmark</span>
                        </button>
                    ) : (
                        <button
                            className=" mr-2 w-6 h-6 text-slate-600 dark:text-slate-300 "
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(addToBookmark({ token, postId: post._id }));
                            }}
                        >
                            <span className="material-icons-outlined hover:text-primary-color">bookmark_border</span>
                        </button>
                    )}
                </div>
            </div>
            {showCommentModal ? (
                <CommentModal post={post} setCommentModal={setCommentModal} currentUser={currentUser} />
            ) : null}
        </>
    );
}
