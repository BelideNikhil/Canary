import { useState } from "react";
import { FollowListModal } from "../index";

export default function LikedBy({ post }) {
    const [showLikedModal, setLikedModal] = useState({ show: false, title: "", list: [] });

    return (
        <div>
            {post?.likes?.likedBy.length > 0 ? (
                <button
                    className="dark:text-primary-color text-sm font-medium hover:underline text-black"
                    onClick={() =>
                        setLikedModal({
                            show: true,
                            list: post.likes.likedBy,
                            title: "LIKED BY",
                        })
                    }
                >
                    Liked by {post?.likes?.likedBy[0]?.username}
                    {post?.likes?.likedBy.length > 1 ? ` and ${post.likes.likedBy.length - 1} Others` : null}
                </button>
            ) : null}
            {showLikedModal.show ? (
                <FollowListModal setFollowModal={setLikedModal} followModal={showLikedModal} />
            ) : null}
        </div>
    );
}
