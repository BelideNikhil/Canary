import { useRef, useState } from "react";
import { useClickOustide } from "../../../Hooks/useClickOutside";
import { updateUser } from "../Utils";
import { setLoading } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import { UploadImage } from "../../../Utils";

export default function EditProfileModal({ setProfileModal, userDetails }) {
    const [userData, setUserData] = useState(userDetails);
    const [newProfileUrl, setProfileUrl] = useState("");
    const profileModalRef = useRef(null);
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    async function formSubmitHandler(e) {
        e.preventDefault();
        if (newProfileUrl) {
            dispatch(setLoading());
            const response = await UploadImage({ file: newProfileUrl });
            dispatch(
                updateUser({
                    token,
                    userData: { ...userData, profileUrl: response.url, imageAlt: response.original_filename },
                })
            );
        } else {
            dispatch(updateUser({ token, userData }));
        }
        setProfileModal(false);
    }
    useClickOustide(profileModalRef, setProfileModal);

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-modal-background z-10">
            <div className="bg-slate-100 dark:bg-slate-800 w-11/12 max-w-lg rounded-md px-5 py-4" ref={profileModalRef}>
                <form onSubmit={formSubmitHandler}>
                    <div className=" flex justify-center mb-3">
                        <div className="relative">
                            {userDetails.profileUrl ? (
                                <img
                                    src={newProfileUrl ? URL.createObjectURL(newProfileUrl) : userDetails?.profileUrl}
                                    alt={userDetails?.username}
                                    className="rounded-full w-28 h-28"
                                />
                            ) : (
                                <div className="rounded-full shrink-0  w-28 h-28 mr-2 border-2 border-primary-color bg-slate-500 text-slate-50 font-medium flex justify-center items-center">
                                    {userDetails?.username[0].toUpperCase()}
                                </div>
                            )}
                            <label>
                                <span className="material-icons absolute bottom-[-5px] right-0 text-slate-800 dark:text-slate-200 cursor-pointer">
                                    photo_camera
                                </span>
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => setProfileUrl(e.target.files[0])}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col border border-slate-400 rounded-md px-2 py-1 focus-within:border-sky-500 focus-within:border-2 mb-3">
                        <label className="text-left text-xs	text-slate-500 dark:text-slate-300">Full Name</label>
                        <input
                            type="text"
                            required
                            value={userData.fullName}
                            onChange={(e) => setUserData((prev) => ({ ...prev, fullName: e.target.value }))}
                            className="focus:outline-none text-sm pt-0.5 bg-slate-100 dark:bg-slate-800 dark:text-slate-100"
                        />
                    </div>
                    <div className="flex flex-col border border-slate-400 rounded-md px-2 py-1 focus-within:border-sky-500 focus-within:border-2 mb-3">
                        <label className="text-left text-xs	text-slate-500 dark:text-slate-300">Bio</label>
                        <input
                            type="text"
                            required
                            value={userData.bio}
                            onChange={(e) => setUserData((prev) => ({ ...prev, bio: e.target.value }))}
                            className="focus:outline-none text-sm pt-0.5 bg-slate-100 dark:bg-slate-800 dark:text-slate-100"
                        />
                    </div>
                    <div className="flex flex-col border border-slate-400 rounded-md px-2 py-1 focus-within:border-sky-500 focus-within:border-2 mb-3">
                        <label className="text-left text-xs	text-slate-500 dark:text-slate-300">Website</label>
                        <input
                            type="text"
                            onChange={(e) => setUserData((prev) => ({ ...prev, website: e.target.value }))}
                            required
                            value={userData.website}
                            className="focus:outline-none text-sm pt-0.5 bg-slate-100 dark:bg-slate-800 dark:text-slate-100"
                        />
                    </div>
                    <div className="flex justify-end items-center">
                        <button
                            onClick={() => setProfileModal(false)}
                            type="button"
                            className="rounded-full h-max border border-primary-color px-3 text-slate-800 text-sm font-medium dark:text-slate-200 mr-3"
                        >
                            Cancel
                        </button>
                        <button className="rounded-full h-max bg-primary-color px-4 text-slate-100 font-medium">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
