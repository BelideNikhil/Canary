import { Sidebar, Suggestions, PageHeader } from "../../Components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarks } from "./Utils";
import { Loading, PostCard } from "../../Components";

export default function Bookmarks() {
    const dispatch = useDispatch();
    const {
        bookmark: { bookmarks, isLoading },
        auth: { token },
        post: { posts },
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getBookmarks({ token }));
    }, [token, dispatch]);

    const bookmarkedPost = posts.filter((post) => bookmarks.includes(post._id));

    return (
        <div className="grid grid-cols-[13rem_2fr_1fr] w-[80%] gap-4 m-auto">
            <Sidebar />
            <div className="border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar">
                <PageHeader pagename={"Bookmarks"} />
                {isLoading ? (
                    <div className="flex justify-center">
                        <Loading />
                    </div>
                ) : bookmarkedPost.length ? (
                    bookmarkedPost.map((post) => {
                        return <PostCard post={post} key={post._id} />;
                    })
                ) : (
                    <div className="text-center p-5 font-medium text-lg	 text-slate-800 dark:text-slate-200">
                        No Bookmarks found
                    </div>
                )}
            </div>

            <Suggestions />
        </div>
    );
}
