import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getPost } from "../../features/Post/Utils/getPost";
import { Sidebar, Suggestions, PageHeader, Loading, UserAvatar, OptionsModal } from "../index";
import { useClickOustide } from "../../Hooks/useClickOutside";
import { likePost, dislikePost } from "../../features/Post/Utils";
import { addToBookmark, removeFromBookmark } from "../../features/Bookmark/Utils";
import { cleanSinglePost } from "../../features/Post/postSlice";

export default function SinglePost() {
    const [showOptions, setShowOptions] = useState(false);

    const dispatch = useDispatch();
    const { postId } = useParams();
    const optionsRef = useRef(null);
    const navigate = useNavigate();

    const {
        post: { singlePost: post, posts },
        user: { users },
        auth: {
            token,
            userDetails: { username },
        },
        bookmark: { bookmarks },
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getPost({ postId }));
        return () => dispatch(cleanSinglePost());
    }, [posts, postId, dispatch]);

    useClickOustide(optionsRef, setShowOptions);

    const currentUser = users?.find((user) => user.username === post?.username);
    const foundInLiked = post?.likes?.likedBy?.find((item) => item.username === username);

    const foundInBookmarks = bookmarks?.find((bookmark) => bookmark === post?._id);
    return (
        <div className="grid grid-cols-[13rem_2fr_1fr] w-[80%] m-auto gap-4">
            <Sidebar />
            <div className="border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar">
                <PageHeader pagename={"Post"} />
                {post ? (
                    <div
                        className="border-b border-slate-400 px-4 py-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700"
                        ref={optionsRef}
                        onClick={() => navigate(`/post/${post.id}`)}
                    >
                        <div className="flex  justify-between items-center">
                            {currentUser ? <UserAvatar user={currentUser} /> : null}
                            <div className="relative">
                                <button
                                    className="w-6 h-full text-slate-800 dark:text-slate-300"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowOptions((prev) => !prev);
                                    }}
                                >
                                    <span className="material-icons-outlined pointer-events-none">more_vert</span>
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
                                        onClick={() => dispatch(dislikePost({ token, postId: post._id }))}
                                    >
                                        <span className="material-icons">favorite</span>
                                    </button>
                                ) : (
                                    <button
                                        className=" mr-2 w-6 h-6 text-slate-600 dark:text-slate-300"
                                        onClick={() => dispatch(likePost({ token, postId: post._id }))}
                                    >
                                        <span className="material-icons-outlined">favorite_border</span>
                                    </button>
                                )}
                                <span className="font-medium text-slate-800 dark:text-slate-200">
                                    {post?.likes?.likeCount}
                                </span>
                            </div>
                            <button className=" mr-2 w-6 h-6 text-slate-600 dark:text-slate-300">
                                <span className="material-icons-outlined">question_answer</span>
                            </button>
                            {foundInBookmarks ? (
                                <button
                                    className=" mr-2 w-6 h-6 text-primary-color"
                                    onClick={() => dispatch(removeFromBookmark({ token, postId: post._id }))}
                                >
                                    <span className="material-icons">bookmark</span>
                                </button>
                            ) : (
                                <button
                                    className=" mr-2 w-6 h-6 text-slate-600 dark:text-slate-300"
                                    onClick={() => dispatch(addToBookmark({ token, postId: post._id }))}
                                >
                                    <span className="material-icons-outlined">bookmark_border</span>
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center">
                        <Loading />
                    </div>
                )}
            </div>
            <Suggestions />
        </div>
    );
}
