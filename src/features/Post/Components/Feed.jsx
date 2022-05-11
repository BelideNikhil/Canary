import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPosts } from "../Utils";
import { Loading } from "../../../Components";
import { PostCard } from "./index";

export default function Feed() {
    const dispatch = useDispatch();
    const { posts, isLoading } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(allPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let reversedPosts = posts?.map((post) => post).reverse();
    return (
        <div className="">
            {isLoading ? (
                <div className="flex justify-center">
                    <Loading />
                </div>
            ) : (
                reversedPosts?.map((post) => {
                    return <PostCard post={post} key={post._id} />;
                })
            )}
        </div>
    );
}
