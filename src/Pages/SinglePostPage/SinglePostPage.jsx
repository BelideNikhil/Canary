import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
    Sidebar,
    BottomBar,
    PageHeader,
    Loading,
    UserAvatar,
    OptionsModal,
    SingleComment,
    LikedBy,
    Suggestions,
} from "../../Components";
import { useClickOustide } from "../../Hooks/useClickOutside";
import { likePost, dislikePost, addComment, getPost } from "../../features/Post/Utils";
import { addToBookmark, removeFromBookmark } from "../../features/Bookmark/Utils";
import { cleanSinglePost } from "../../features/Post/postSlice";
import { GetPostDate, SharePost, SortBy } from "../../Utils";

export default function SinglePostPage() {
    const [showOptions, setShowOptions] = useState(false);
    const [comment, setComment] = useState("");
    const { postId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const commentRef = useRef(null);
    const optionsRef = useRef(null);

    const {
        post: { singlePost: post, posts, isLoading },
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

    function commentSubmitHandler(e) {
        e.preventDefault();
        if (comment.trim()) {
            dispatch(addComment({ token, postId: post._id, commentData: { comment } }));
        }
        setComment("");
    }

    function focusHandler() {
        commentRef.current && commentRef.current.focus();
    }

    const currentUser = users?.find((user) => user.username === post?.username);
    const foundInLiked = post?.likes?.likedBy?.find((item) => item.username === username);

    const foundInBookmarks = bookmarks?.find((bookmark) => bookmark === post?._id);

    return (
        <div className="grid grid-cols-1fr md:grid-cols-[13rem_1fr] lg:grid-cols-[13rem_1fr_16rem]  w-full md:w-11/12 lg:w-[80%] gap-4 m-auto max-w-[1200px]">
            <Sidebar />
            <div className="md:border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar pb-36">
                <PageHeader pagename={"Post"} />
                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <Loading />
                    </div>
                ) : post?.content ? (
                    <>
                        <div
                            className="border-b border-slate-400 px-4 py-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700"
                            ref={optionsRef}
                            onClick={() => navigate(`/post/${post.id}`)}
                        >
                            <div className="flex  justify-between items-center">
                                <div className="flex items">
                                    {currentUser ? <UserAvatar username={currentUser.username} /> : null}
                                    {post?.createdAt ? (
                                        <span className="font-medium text-xs text-slate-800 dark:text-slate-100 mt-2">
                                            · {GetPostDate(post.createdAt)}
                                        </span>
                                    ) : null}
                                </div>
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
                            <div className="py-2 text-slate-900 dark:text-slate-100 break-all mt-4 mx-4">
                                {post.content}
                            </div>
                            <div>
                                {post.postImgUrl ? (
                                    <img
                                        src={post.postImgUrl}
                                        alt={post.imageAlt}
                                        className="w-11/12 max-h-[450px] m-auto rounded-md"
                                    />
                                ) : null}
                            </div>
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
                                <div className="flex items-center">
                                    <button className=" mr-2 w-6 h-6 text-slate-600 dark:text-slate-300">
                                        <span className="material-icons-outlined">question_answer</span>
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
                                <button
                                    className=" mr-2 w-6 h-6 text-slate-600 dark:text-slate-300"
                                    onClick={() => SharePost(post.id)}
                                >
                                    <span className="material-icons-outlined">share</span>
                                </button>
                            </div>
                            <LikedBy post={post} />
                        </div>
                        <div className="p-2 border-y border-slate-500" onClick={focusHandler}>
                            <form onSubmit={commentSubmitHandler}>
                                <input
                                    ref={commentRef}
                                    type="text"
                                    placeholder="Reply..."
                                    onChange={(e) => setComment(e.target.value)}
                                    className="outline-none w-full text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800"
                                />
                                <div className="flex justify-end">
                                    <button
                                        disabled={!comment.trim()}
                                        className="disabled:cursor-not-allowed text-sm disabled:opacity-40 bg-primary-color rounded-full px-3 py-0.5 my-2 text-slate-100"
                                    >
                                        Reply
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div>
                            {post?.comments
                                ? SortBy(post.comments, "Latest").map((eachComment) => {
                                      return <SingleComment comment={eachComment} key={eachComment._id} post={post} />;
                                  })
                                : null}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col justify-center items-center mt-8">
                        <div className="font-medium text-2xl mb-4 text-slate-800 dark:text-slate-100">
                            Post Not Found
                        </div>
                        <button
                            className="bg-primary-color w-max rounded-full px-8 py-1.5 my-2 text-slate-100 font-medium"
                            onClick={() => navigate("/")}
                        >
                            Back to Home
                        </button>
                    </div>
                )}
            </div>
            <BottomBar />
            <Suggestions />
        </div>
    );
}
