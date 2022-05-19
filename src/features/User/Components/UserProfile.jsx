import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Feed, Loading, FollowListModal, PageHeader } from "../../../Components";
import { allPosts } from "../../Post/Utils";
import EditProfileModal from "./EditProfileModal";
import { followUser, unFollowUser } from "../Utils";
import { userLogout } from "../../Auth/authSlice";
import { SortBy } from "../../../Utils";

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
    }, [dispatch]);

    const currentUserDetails = users?.find((user) => user.username === username);
    const filteredPosts = posts?.filter((post) => post.username === username);
    const sortedPosts = SortBy(filteredPosts, "Latest");

    return (
        <div className="md:border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar pb-36">
            <PageHeader pagename={currentUserDetails?.username} />
            <div className="px-5 xl:px-2 py-5 border-b-2 border-slate-300 bg-gray-200 dark:bg-slate-900">
                <div className="flex flex-col xl:flex-row  justify-between">
                    <div className="flex flex-col items-center xl:flex-row">
                        {isLoading ? (
                            <Loading />
                        ) : currentUserDetails?.profileUrl ? (
                            <img
                                src={currentUserDetails?.profileUrl}
                                alt={currentUserDetails?.fullName}
                                className="rounded-full  w-28 h-28 mr-2 border-2 border-primary-color"
                            />
                        ) : (
                            <div className="rounded-full shrink-0  w-28 h-28 mr-2 border-2 border-primary-color bg-slate-500 text-slate-50 font-medium flex justify-center items-center">
                                {currentUserDetails?.username[0].toUpperCase()}
                            </div>
                        )}
                        <div className="flex flex-col items-center xl:items-start">
                            <div className="text-slate-800 dark:text-slate-100 font-semibold">
                                {currentUserDetails?.fullName}
                            </div>
                            <div className="text-slate-500 dark:text-slate-300  mb-2 text-xs font-semibold">
                                @{currentUserDetails?.username}
                            </div>
                            <div className="text-slate-700 dark:text-slate-200  mb-2">{currentUserDetails?.bio}</div>
                            <div className="flex items-center mb-2">
                                <span className="material-icons-outlined text-slate-400 mr-1">language</span>

                                <a
                                    href={currentUserDetails?.website}
                                    target="_blank"
                                    rel="noreferrer"
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
                    <div className="flex h-max justify-center mt-2">
                        {userDetails.username === username ? (
                            <>
                                <button
                                    onClick={() => setProfileModal(true)}
                                    className="rounded-full mr-4 text-sm font-medium h-max border-2 bg-gray-200 dark:bg-slate-900 border-primary-color px-3 text-slate-800 dark:text-slate-200"
                                >
                                    Edit Profile
                                </button>
                                <button
                                    className="text-slate-800 dark:text-slate-100 w-6 h-6 self-center"
                                    onClick={() => dispatch(userLogout())}
                                >
                                    <span className="material-icons-outlined">logout</span>
                                </button>
                            </>
                        ) : currentUserDetails?.followers?.find((user) => user.username === userDetails.username) ? (
                            <button
                                onClick={() => dispatch(unFollowUser({ token, followUserId: currentUserDetails._id }))}
                                className="rounded-full  h-max border-2 border-primary-color px-3 text-slate-800 dark:text-slate-200"
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
                    </div>
                </div>
            </div>
            <Feed posts={sortedPosts} />
            {showProfileModal ? (
                <EditProfileModal setProfileModal={setProfileModal} userDetails={currentUserDetails} />
            ) : null}
            {followModal.show ? <FollowListModal setFollowModal={setFollowModal} followModal={followModal} /> : null}
        </div>
    );
}
