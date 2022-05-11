import { useSelector, useDispatch } from "react-redux";
import { NewPost, Feed } from ".";
import { toggleTheme } from "../../User/userSlice";

export default function Post() {
    const { darkTheme } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <div className="border-x border-slate-500 h-screen  overflow-y-auto no-scrollbar">
            <div className="flex z-4 p-3 sticky top-0 bg-slate-200 dark:bg-gray-700 ">
                <div className=" font-semibold  text-slate-800  dark:text-slate-100 w-full">Home</div>
                <button
                    className={`w-6 h-6 transition duration-[0.5s] dark:text-slate-200 ${
                        !darkTheme ? "rotate-180" : ""
                    }`}
                    onClick={() => dispatch(toggleTheme(darkTheme ? false : true))}
                >
                    <span className="material-icons-outlined">{darkTheme ? "dark_mode" : "light_mode"}</span>
                </button>
            </div>
            <NewPost />
            <Feed />
        </div>
    );
}
