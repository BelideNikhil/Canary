import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Feed, Loading, FollowListModal } from "../../../Components";
import { allPosts } from "../../Post/Utils";
import EditProfileModal from "./EditProfileModal";
import { followUser, unFollowUser } from "../Utils";
import { userLogout } from "../../Auth/authSlice";

export default function UserProfile() {
    const [showProfileModal, setProfileModal] = useState(false);
    const [followModal, setFollowModal] = useState({ show: false, title: "", list: [] });

    const { username } = useParams();
    const dispatch = useDispatch();
    const {
        user: { users, isLoading },
        post: { posts },
        auth: { userDetails, token },
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(allPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const currentUserDetails = users?.find((user) => user.username === username);
    const filteredPosts = posts?.filter((post) => post.username === username);
    return (
        <div className="border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar">
            <div className="pt-8 pb-5 px-5 border-b-2 border-slate-300 bg-gray-200 dark:bg-slate-900">
                <div className="flex justify-between">
                    <div className="flex">
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <img
                                src={currentUserDetails?.profileUrl}
                                alt={currentUserDetails?.username}
                                className="rounded-full w-28 h-28 border-2 border-primary-color mr-8"
                            />
                        )}
                        <div>
                            <div className="text-slate-800 dark:text-slate-100 font-semibold">
                                {currentUserDetails?.fullName}
                            </div>
                            <div className="text-slate-500 dark:text-slate-300  mb-2 text-xs font-semibold">
                                @{currentUserDetails?.username}
                            </div>
                            <div className="text-slate-700 dark:text-slate-200  mb-2">{currentUserDetails?.bio}</div>
                            <div className="flex items-center mb-2">
                                <span className="material-icons-outlined text-slate-400 mr-1">language</span>
                                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                <a
                                    href={currentUserDetails?.website}
                                    target="_blank"
                                    className="text-slate-800 dark:text-sky-500 text-sm hover:underline"
                                >
                                    {currentUserDetails?.website}
                                </a>
                            </div>
                            <div className="flex">
                                <div className="text-slate-800 dark:text-slate-50 font-semibold text-sm mr-4 ">
                                    {filteredPosts?.length} Posts
                                </div>
                                <div
                                    className="text-slate-800 dark:text-slate-50 cursor-pointer font-semibold text-sm hover:underline mr-4 "
                                    role="button"
                                    onClick={() =>
                                        setFollowModal({
                                            show: true,
                                            title: "Following",
                                            list: currentUserDetails?.following,
                                        })
                                    }
                                >
                                    {currentUserDetails?.following?.length} Following
                                </div>
                                <div
                                    className="text-slate-800 dark:text-slate-50 cursor-pointer font-semibold text-sm hover:underline "
                                    role="button"
                                    onClick={() =>
                                        setFollowModal({
                                            show: true,
                                            title: "Followers",
                                            list: currentUserDetails?.followers,
                                        })
                                    }
                                >
                                    {currentUserDetails?.followers?.length} Followers
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-max">
                        {userDetails.username === username ? (
                            <button
                                onClick={() => setProfileModal(true)}
                                className="rounded-full mr-4 h-max border-2 bg-gray-200 dark:bg-slate-900 border-primary-color px-3 text-slate-800 dark:text-slate-200"
                            >
                                Edit Profile
                            </button>
                        ) : currentUserDetails?.followers?.find((user) => user.username === userDetails.username) ? (
                            <button
                                onClick={() => dispatch(unFollowUser({ token, followUserId: currentUserDetails._id }))}
                                className="rounded-full mr-4 h-max border-2 border-primary-color px-3 text-slate-800 dark:text-slate-200"
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                onClick={() => dispatch(followUser({ token, followUserId: currentUserDetails._id }))}
                                className="rounded-full mr-4 h-max border-2 border-primary-color px-3 text-slate-800 dark:text-slate-200"
                            >
                                Follow
                            </button>
                        )}
                        <button
                            className="text-slate-800 dark:text-slate-100 w-6 h-6 self-center"
                            onClick={() => dispatch(userLogout())}
                        >
                            <span className="material-icons-outlined">logout</span>
                        </button>
                    </div>
                </div>
            </div>
            <Feed posts={filteredPosts} />
            {showProfileModal ? (
                <EditProfileModal setProfileModal={setProfileModal} userDetails={currentUserDetails} />
            ) : null}
            {followModal.show ? <FollowListModal setFollowModal={setFollowModal} followModal={followModal} /> : null}
        </div>
    );
}
