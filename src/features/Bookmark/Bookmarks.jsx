import { Sidebar, PageHeader, Suggestions, BottomBar } from "../../Components";
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
        <div className="grid grid-cols-1fr md:grid-cols-[13rem_1fr] lg:grid-cols-[13rem_1fr_16rem] w-full md:w-11/12 lg:w-[80%] gap-4 m-auto max-w-[1200px]">
            <Sidebar />
            <div className="md:border-x border-slate-500 h-screen overflow-y-auto no-scrollbar pb-36">
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
            <BottomBar />
            <Suggestions />
        </div>
    );
}
