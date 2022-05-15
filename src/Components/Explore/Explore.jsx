import { Sidebar, Suggestions, PageHeader } from "../../Components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, PostCard } from "../../Components";
import { allPosts } from "../../features/Post/Utils";

export default function Explore() {
    const dispatch = useDispatch();
    const { posts, isLoading } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(allPosts());
    }, [dispatch]);

    return (
        <div className="grid grid-cols-[13rem_2fr_1fr] w-[80%] gap-4 m-auto">
            <Sidebar />
            <div className="border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar">
                <PageHeader pagename={"Explore"} />
                {isLoading ? (
                    <Loading />
                ) : posts ? (
                    [...posts].reverse().map((post) => <PostCard post={post} key={post._id} />)
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
