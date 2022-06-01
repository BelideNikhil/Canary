import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "../../Components";

export default function UserAuth() {
    const {
        auth: { isLoading },
    } = useSelector((state) => state);
    return (
        <div className="flex flex-col sm:grid  sm:grid-cols-2 min-h-screen w-11/12 m-auto max-w-screen-2xl">
            <div className="place-self-center w-40 sm:w-64 lg:w-96 xl:w-full mb-8 sm:mb-0">
                <img src="/Canary.png" alt="Canary" className="m-auto" />
                <div className="text-slate-800 dark:text-slate-100 text-center text-2xl">Share. Engage. Discover.</div>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center">
                    <Loading />
                </div>
            ) : (
                <Outlet />
            )}
        </div>
    );
}
