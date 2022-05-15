import "./App.css";
import PageRoutes from "./Routes/PageRoutes";
import { useSelector } from "react-redux";
import { ToastWrapper } from "./Components";

export default function App() {
    const { darkTheme } = useSelector((state) => state.user);
    return (
        <div className={`App min-h-screen ${darkTheme ? "" : "dark"} font-montserrat `}>
            <ToastWrapper />
            <div className="bg-slate-100 dark:bg-slate-800 min-h-screen">
                <PageRoutes />
            </div>
        </div>
    );
}
