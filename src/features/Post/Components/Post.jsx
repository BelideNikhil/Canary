import { useSelector, useDispatch } from "react-redux";
import { NewPost, Feed, FilterBar } from ".";
import { useEffect } from "react";
import { allPosts } from "../Utils";
import { PageHeader } from "../../../Components";
import { SortBy, FilterUserPosts } from "../../../Utils";

export default function Post() {
    const dispatch = useDispatch();
    const {
        post: { posts, selectedFilter },
        auth: {
            userDetails: { username },
        },
        user: { users },
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(allPosts());
    }, [dispatch]);

    const currentUser = users?.find((user) => user.username === username);

    const filteredPosts = FilterUserPosts(posts, currentUser);
    const sortedPosts = SortBy(filteredPosts, selectedFilter);

    return (
        <div className="border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar">
            <PageHeader pagename={"Home"} />
            <NewPost />
            <FilterBar />
            <Feed posts={sortedPosts} />
        </div>
    );
}
