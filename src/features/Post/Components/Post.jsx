import { useSelector, useDispatch } from "react-redux";
import { NewPost, Feed } from ".";
import { useEffect } from "react";
import { allPosts } from "../Utils";
import { PageHeader } from "../../../Components";

export default function Post() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allPosts());
    }, [dispatch]);

    const { posts } = useSelector((state) => state.post);
    let reversedPosts = posts?.map((post) => post).reverse();
    return (
        <div className="border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar">
            <PageHeader pagename={"Home"} />
            <NewPost />
            <Feed posts={reversedPosts} />
        </div>
    );
}
