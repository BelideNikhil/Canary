import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toggleTheme, setSearchText } from "../../features/User/userSlice";
import { Search } from "../index";

export default function PageHeader({ pagename }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { darkTheme } = useSelector((state) => state.user);
    const { pathname } = useLocation();
    const searchRef = useRef(null);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                dispatch(setSearchText(""));
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [searchRef, dispatch]);

    return (
        <div className="flex z-10 p-3 sticky top-0 bg-slate-200 dark:bg-gray-900 border-b border-slate-500 flex flex-col">
            <div className="flex justify-between items-center mb-4 ">
                <div className="flex">
                    {pathname.includes("post") || pathname.includes("profile") ? (
                        <button
                            className="text-slate-800 dark:text-slate-200 mr-2 w-6 h-6"
                            onClick={() => navigate(-1)}
                        >
                            <span className="material-icons-outlined">arrow_back</span>
                        </button>
                    ) : null}
                    <div className=" font-semibold  text-slate-800  dark:text-slate-100 ">
                        {pagename === "Home" ? (
                            <>
                                <div role="button" className="md:hidden">
                                    <img src="/Canary.png" alt="" className="w-10 h-10" />
                                </div>
                                <span className="hidden md:block">{pagename}</span>
                            </>
                        ) : (
                            pagename
                        )}
                    </div>
                </div>

                <button
                    className={`w-6 h-6 transition duration-[0.5s] dark:text-slate-200 ${
                        !darkTheme ? "rotate-180" : ""
                    }`}
                    onClick={() => dispatch(toggleTheme(darkTheme ? false : true))}
                >
                    <span className="material-icons-outlined">{darkTheme ? "dark_mode" : "light_mode"}</span>
                </button>
            </div>
            <div ref={searchRef}>
                <Search />
            </div>
        </div>
    );
}
