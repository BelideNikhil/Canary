import "./App.css";
import PageRoutes from "./Routes/PageRoutes";
import { useSelector } from "react-redux";

export default function App() {
    const { darkTheme } = useSelector((state) => state.user);
    return (
        <div className={`App min-h-screen ${darkTheme ? "" : "dark"} font-montserrat `}>
            <div className="bg-slate-100 dark:bg-slate-800 min-h-screen">
                <PageRoutes />
            </div>
        </div>
    );
}
