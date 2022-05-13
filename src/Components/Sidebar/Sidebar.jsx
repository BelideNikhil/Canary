import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { EditModal } from "../index";

export default function Sidebar() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const {
        userDetails: { username },
    } = useSelector((state) => state.auth);
    return (
        <>
            <div className="min-h-screen w-52 m-auto px-1">
                <div role="button" className="mb-10" onClick={() => navigate("/")}>
                    <img src="/Canary.png" alt="" className="w-14 h-14 ml-2" />
                </div>
                <div>
                    <NavLink
                        to="/"
                        className={` ${(isActive) => (isActive ? "active" : "")}
                    sidebar-btn home-btn text-md text-slate-600 dark:text-slate-300 flex items-center w-max hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full pl-4 pr-8 py-2 mb-2 active:scale-[0.98]`}
                    >
                        <span className={`material-icons-outlined mr-4`}>home</span>
                        Home
                    </NavLink>

                    <NavLink
                        to="/explore"
                        className={`sidebar-btn home-btn text-md text-slate-600 dark:text-slate-300 pl-4 pr-8 py-2 w-max hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full mb-2 active:scale-[0.98]${({
                            isActive,
                        }) => ({ isActive } ? "active" : "")} flex items-center`}
                    >
                        <span className="material-icons-outlined mr-4 ">tag</span>Explore
                    </NavLink>

                    <NavLink
                        to="/bookmarks"
                        className={`sidebar-btn home-btn text-md text-slate-600 dark:text-slate-300 flex items-center w-max hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full pl-4 pr-8 py-2 mb-2 active:scale-[0.98] 
                    ${({ isActive }) => (isActive ? "active" : "")} `}
                    >
                        <span className={`material-icons-outlined mr-4`}>bookmark_border</span>Bookmarks
                    </NavLink>
                    <NavLink
                        to={`/profile/${username}`}
                        className={`sidebar-btn home-btn text-md text-slate-600 dark:text-slate-300 flex items-center w-max hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full pl-4 pr-8 py-2 mb-2 active:scale-[0.98] 
                    ${({ isActive }) => (isActive ? "active" : "")} `}
                    >
                        <span className={`material-icons-outlined mr-4`}>person_outline</span>Profile
                    </NavLink>
                    <button
                        className="bg-primary-color rounded-full w-11/12 py-1.5 my-2 text-slate-100 font-medium"
                        onClick={() => setShowModal(true)}
                    >
                        Post
                    </button>
                </div>
            </div>
            {showModal ? <EditModal setShowModal={setShowModal} /> : null}
        </>
    );
}
