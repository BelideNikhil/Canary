import { useSelector, useDispatch } from "react-redux";
import { NewPost, Feed, FilterBar } from ".";
import { useEffect } from "react";
import { allPosts } from "../Utils";
import { PageHeader } from "../../../Components";
import { SortBy, FilterUserPosts } from "../../../Utils";
import { getBookmarks } from "../../Bookmark/Utils";

export default function Post() {
    const dispatch = useDispatch();
    const {
        post: { posts, selectedFilter },
        auth: {
            token,
            userDetails: { username },
        },
        user: { users },
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(allPosts());
        dispatch(getBookmarks({ token }));
    }, [dispatch, token]);

    const currentUser = users?.find((user) => user.username === username);

    const filteredPosts = FilterUserPosts(posts, currentUser);
    const sortedPosts = SortBy(filteredPosts, selectedFilter);

    return (
        <div className="md:border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar pb-36">
            <PageHeader pagename={"Home"} />
            <NewPost />
            <FilterBar />
            <Feed posts={sortedPosts} />
        </div>
    );
}
