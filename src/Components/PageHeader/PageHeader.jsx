import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/User/userSlice";

export default function PageHeader({ pagename }) {
    const dispatch = useDispatch();
    const { darkTheme } = useSelector((state) => state.user);
    return (
        <div className="flex z-9 p-3 sticky top-0 bg-slate-200 dark:bg-gray-900 border-b border-slate-500">
            <div className=" font-semibold  text-slate-800  dark:text-slate-100 w-full">{pagename}</div>
            <button
                className={`w-6 h-6 transition duration-[0.5s] dark:text-slate-200 ${!darkTheme ? "rotate-180" : ""}`}
                onClick={() => dispatch(toggleTheme(darkTheme ? false : true))}
            >
                <span className="material-icons-outlined">{darkTheme ? "dark_mode" : "light_mode"}</span>
            </button>
        </div>
    );
}
