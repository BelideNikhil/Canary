import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "../../Components";

export default function UserAuth() {
    const {
        auth: { isLoading },
    } = useSelector((state) => state);
    return (
        <div className="flex flex-col sm:grid  sm:grid-cols-2 min-h-screen w-11/12 m-auto">
            <div className="place-self-center w-40 sm:w-64 lg:w-96 xl:w-full mb-8 sm:mb-0">
                <img src="/Canary.png" alt="Canary" />
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
