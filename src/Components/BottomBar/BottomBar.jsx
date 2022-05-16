import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import EditModal from "../EditModal/EditModal";

export default function BottomBar() {
    const [showModal, setShowModal] = useState(false);

    const {
        userDetails: { username },
    } = useSelector((state) => state.auth);

    return (
        <>
            <div className="fixed left-0 bottom-0 w-full flex justify-between items-center bg-slate-200 dark:bg-slate-900  shadow-inner px-4 md:hidden">
                <NavLink
                    to="/"
                    className={` ${(isActive) => (isActive ? "active" : "")}
                    home-btn text-xs text-slate-600 dark:text-slate-300 flex flex-col justify-center items-center w-max hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg px-3 py-2  active:scale-[0.98]`}
                >
                    <span className="material-icons-outlined">home</span>
                    Home
                </NavLink>

                <NavLink
                    to="/explore"
                    className={`home-btn text-xs text-slate-600 dark:text-slate-300 flex flex-col justify-center items-center px-3 py-2 w-max hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg active:scale-[0.98]${({
                        isActive,
                    }) => ({ isActive } ? "active" : "")} flex items-center`}
                >
                    <span className="material-icons-outlined">tag</span>Explore
                </NavLink>

                <NavLink
                    to="/bookmarks"
                    className={`home-btn text-xs text-slate-600 dark:text-slate-300 flex flex-col justify-center items-center w-max hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg px-3 py-2 active:scale-[0.98] 
                    ${({ isActive }) => (isActive ? "active" : "")} `}
                >
                    <span className="material-icons-outlined">bookmark_border</span>Bookmarks
                </NavLink>
                <NavLink
                    to={`/profile/${username}`}
                    className={`home-btn text-xs text-slate-600 dark:text-slate-300 flex flex-col justify-center items-center w-max hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg px-3 py-2 active:scale-[0.98] 
                    ${({ isActive }) => (isActive ? "active" : "")} `}
                >
                    <span className="material-icons-outlined">person_outline</span>Profile
                </NavLink>
                <button
                    className="fixed bottom-20 w-12 h-12 flex justify-center items-center  right-4 bg-primary-color rounded-full text-slate-100"
                    onClick={() => setShowModal(true)}
                >
                    <span className="material-icons-outlined font-semibold">add</span>
                </button>
            </div>
            {showModal ? <EditModal setShowModal={setShowModal} /> : null}
        </>
    );
}
