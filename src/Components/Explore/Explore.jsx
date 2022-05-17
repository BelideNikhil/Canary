import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, PostCard, UserPersonal, BottomBar, Sidebar, PageHeader } from "../../Components";
import { allPosts, getPagedPosts } from "../../features/Post/Utils";
import { setPageNum } from "../../features/Post/postSlice";
import { useLastObserver } from "../../Hooks/useLastObserver";

export default function Explore() {
    const dispatch = useDispatch();
    const [lastPost, setLastPost] = useState();
    const { posts, isLoading, pageNum, totalPages, pagedPosts } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(allPosts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getPagedPosts({ pageNum }));
    }, [pageNum, totalPages, dispatch, posts]);

    const observer = useRef(
        new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    dispatch(setPageNum());
                }
            },
            { threshold: 1 }
        )
    );

    useLastObserver({ lastPost, observer });

    return (
        <div className="grid grid-cols-1fr md:grid-cols-[13rem_1fr] lg:grid-cols-[13rem_1fr_16rem] w-full md:w-11/12 lg:w-[80%] gap-4 m-auto max-w-[1200px]">
            <Sidebar />
            <div className="md:border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar pb-36">
                <PageHeader pagename={"Explore"} />
                {pagedPosts ? (
                    <>
                        {pagedPosts.map((post) => {
                            return (
                                <div key={post._id} ref={setLastPost}>
                                    <PostCard post={post} />
                                </div>
                            );
                        })}
                        {isLoading ? (
                            <div className="flex justify-center mt-4">
                                <Loading />
                            </div>
                        ) : null}
                    </>
                ) : (
                    <div className="text-center p-5 font-medium text-lg	 text-slate-800 dark:text-slate-200">
                        No Posts found
                    </div>
                )}
            </div>
            <BottomBar />
            <UserPersonal />
        </div>
    );
}
