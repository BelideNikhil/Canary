import { useSelector } from "react-redux";
import { Loading } from "..";
import { PostCard } from "../../features/Post/Components";

export default function Feed({ posts }) {
    const { isLoading } = useSelector((state) => state.post);
    return (
        <div>
            {isLoading ? (
                <div className="flex justify-center">
                    <Loading />
                </div>
            ) : posts?.length > 0 ? (
                posts.map((post) => {
                    return <PostCard post={post} key={post._id} />;
                })
            ) : (
                <div className="text-slate-800 dark:text-slate-100 text-center font-semibold p-4">No posts to show</div>
            )}
        </div>
    );
}
