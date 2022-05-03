import "./App.css";
import PageRoutes from "./Routes/PageRoutes";
export default function App() {
    return (
        <div className="App dark min-h-screen font-montserrat">
            <div className="bg-slate-100 dark:bg-slate-800 min-h-screen">
                <PageRoutes />
            </div>
        </div>
    );
}
