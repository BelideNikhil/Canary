import { Sidebar, PageHeader } from "../../Components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, PostCard } from "../../Components";
import { allPosts } from "../../features/Post/Utils";
import UserPersonal from "../UserPersonal/UserPersonal";
import BottomBar from "../BottomBar/BottomBar";
import { SortBy } from "../../Utils";

export default function Explore() {
    const dispatch = useDispatch();
    const { posts, isLoading } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(allPosts());
    }, [dispatch]);

    const explorePosts = SortBy(posts, "Latest");

    return (
        <div className="grid grid-cols-1fr md:grid-cols-[13rem_1fr] lg:grid-cols-[13rem_1fr_16rem] w-full md:w-11/12 lg:w-[80%] gap-4 m-auto">
            <Sidebar />
            <div className="md:border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar">
                <PageHeader pagename={"Explore"} />
                {isLoading ? (
                    <div className="flex justify-center">
                        <Loading />
                    </div>
                ) : explorePosts ? (
                    explorePosts.map((post) => <PostCard post={post} key={post._id} />)
                ) : (
                    <div className="text-center p-5 font-medium text-lg	 text-slate-800 dark:text-slate-200">
                        No Bookmarks found
                    </div>
                )}
            </div>
            <BottomBar />
            <UserPersonal />
        </div>
    );
}
